const express = require('express');
const routes   = require('express').Router(); 
const jwt = require('jsonwebtoken');

const jwtsecret = require('../config/jwtsecret')
const maindb    = require('../models/user');
const mongoose  = require('mongoose');



module.exports = {
      registerController  : (req,res,next)=>{
            // res.send("hey")
            // return true
        mongoose.set('useFindAndModify', false);
        maindb.findOne({email : req.body.email},(err, user)=>{

              if (err) {                     
               console.log('error')    
              } 
              if(user){
                    console.log("user exist")
                    res.json({
                          message : 'user exist',
                          success : false

                    }) 
                    return false;    
              }else{
                    const user = new maindb(  { 
                          fname : req.body.fname,
                          lname : req.body.lname,
                          phone : req.body.phone,
                          email : req.body.email,
                          password : req.body.password
                   })
              
                   user.save((err)=>{
                         if(err){
                               res.json({
                                     err : 'err'
                               })
                         } 
                         console.log("saved succffully")
                         res.json({
                               message : "Data saved",
                               success : true     
                         })
                   })    
              }
        })
      
  
  },
   loginController :    (req, res, next)=>{ 
                        mongoose.set('useFindAndModify', false); 
                        if(req.body.email==undefined){
                              res.json(
                                                {
                                                      success: false,
                                                      message : "please enter your email and password"

                                                })  
                                          return false
                        }
                        console.log(req.body.email);
                        maindb.findOne({email : req.body.email},(err,user)=>{
                              if(err){
                                    throw err;
                              }
                              
                              if(user){
                                    if(user.password != req.body.password){
                                          res
                                          .json(
                                                {
                                                      success: false,
                                                      message : "user not found"

                                                })   
                                    }else{
                                          const token = jwt.sign({ id: user.email },
                                                                   jwtsecret.SECRET,
                                                                   { expiresIn: '24h' });
                                          res.json({
                                                token : token,
                                                message : 'your are logged-in',
                                                success :true
                                          })
                                    } 
                              } else{ 
                                    
                                    res.json({
                                                data : false,
                                                message : "user not found"
                                                }) 
                                                
                                          }
                                    }) 
                        } ,
                        adminLoginController :    (req, res, next)=>{ 
                              mongoose.set('useFindAndModify', false); 
                              if(req.body.email==undefined){
                                    res.json(
                                                      {
                                                            success: false,
                                                            message : "please enter your email and password"
      
                                                      })  
                                                return false
                              }
                              console.log(req.body.email);
                              if(req.body.email== "Admin@food.com" && req.body.password=="admin"){
                                    const adminToken = jwt.sign({ id: "admin" },
                                          jwtsecret.ADMINSECRET,
                                          { expiresIn: '24h' });
                                          res.json({
                                                adminToken: adminToken,
                                                message : 'your are logged-in',
                                                success :true
                                          })    
                      
                              }else{ 
                                    res
                                    .json(
                                          {
                                                success: false,
                                                message : "user not found"

                                          })                
                              } 
                        }  

                               
}