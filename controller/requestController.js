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
        mongoose.set('useFindAndModify', false);
        console.log('try and catch')
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
        rqst.title = req.body.title;
        rqst.loc = req.body.loc;
        rqst.phone = req.body.phone;
        rqst.expdate = req.body.date;
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
            console.log(err)
            res.json('error')
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
   getAllDonation: (req,res)=>{
    reqst.find({"createdAt":{$lt:new Date(Date.now() - 24*60*60 * 1000*2)}
    },(err,result)=>{
        if(err){
            res.json({err:"err "});
        }
        if(result){
            res.json(result);
        }
    
    })
     
      
    } ,
    delUserCntrl :(req,res,next)=>{
        console.log("id : ",req.body.id)
        res.json({msg:"DAta deleted hey"}) 
    }

}