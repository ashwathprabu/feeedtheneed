const express   = require('express');
const routes    = require('express').Router(); 
const jwt       = require('jsonwebtoken'); 
const jwtsecret = require('../config/jwtsecret')
const maindb    = require('../models/user');
const reqst     = require('../models/Requests')
const mongoose  = require('mongoose');
const multer  = require('multer')



module.exports = {
    createRequests : (req, res)=>{
        if(req.body.email==undefined){
            res.json(
                              {
                                    success: false,
                                    message : "please enter your credentials!"

                              })  
                        return false
      }

        const rqst = new reqst();
        rqst.email = req.body.email;
        rqst.img = req.file.filename;
        rqst.loc = req.body.image;
        rqst.phone = req.body.phone;
        rqst.desc = req.body.desc;
        console.log('get1')
        rqst.save()
        .then((result)=>{
            console.log('get1')
            maindb.findOne({ email : rqst.email},(err, user)=>{
                if(err){ 
                    console.log('err')
                }
                console.log('getpass')
                if(user){
                    user.requests.push(rqst);
                    user.save();
                    // console.log('success')
                    console.log(user)
                    res.send( rqst);
                }else{
                    res.send('fail')
                }
            })
        }).catch((error)=>{
            res.send('error bvc')
        })
   },

   getRequestCntrl : (req,res)=>{
       console.log('get user ',req.body.email)
    //    res.send('hey there')
       maindb.findOne({'email' : req.body.email})
       .populate('requests')
       .then((result) => {
           if(result){ 
        res.json(result.requests);
    }else {
            res.send('er')
        }
      })
      .catch((error) => {
        res.status(500).json({ error })
    })
// res.send("hey")
   } ,
   getAllUser : (req,res)=>{
    reqst.find({},(err,result)=>{
        if(err){
            console.log('err')
        }
        if(result){
            console.log(result)
        }
        res.send('jj')
    })
     
      
    } 

}