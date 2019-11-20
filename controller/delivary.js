const fooddls = require("../models/deliveredfood");
const express = require("express");
const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const jwtsecret = require("../config/jwtsecret");
const maindb = require("../models/user");
const reqst = require("../models/Requests");
const mongoose = require("mongoose");
const foodord = require("../models/foodord");

module.exports = {
  ordDelivrd: (req, res) => {
    mongoose.set("useFindAndModify", false);
    console.log("avlfood id : ", req.body.id); //id of avlfood
    console.log("food order id", req.body.delid); //It is id of food order table
    // check for null
    if (req.body.id == " ") {
      console.log("id is null");
      res.json({
        success: false,
        message: "id  is null"
      });
      return false;
    }
    if (req.body.id == null) {
      console.log("id is null");
      res.json({
        success: false,
        message: "please send valid food details"
      });
      return false;
    }
    // check for  undefined
    console.log("try and catch");
    if (req.body.email == undefined) {
      res.json({
        success: false,
        message: "please enter your credentials!"
      });
      return false;
    }
    // saving Data
    const rqst = new fooddls();
    rqst.email = req.body.email;
    rqst.loc = req.body.loc;
    rqst.phone = req.body.phone;
    rqst.title = req.body.title;
    rqst.status = "Delevered.";
    console.log("get1");
    rqst.save((err, result) => {
      if (err) {
        res.json({
          err: "err"
        });
      }
      if (result) {
        // Deleteing the food from available
        reqst.findOneAndDelete({ _id: req.body.id }, (err, result) => {
          if (err) {
            console.log("this is exectd from if err");
          }
          if (result) {
            // deleting the food from ord table
            foodord.findOneAndDelete({ _id: req.body.delid }, (err, result) => {
              if (err) {
                console.log("record3");
                res.send("err");
              }
              if (result) {
                res.json({
                  success: true,
                  message: "Your Donation has been deleted from food table"
                });
              }
            });
            console.log("Reocord deleted from avlable table");
          }
        });
      }
    });
  },

  // Canceling order
  cancelOrd: (req, res, next) => {
    foodord.findOneAndDelete({ _id: req.body.id }, (err, result) => {
      if (err) {
        console.log("record3");
        res.send("err");
      }
      if (result) {
        reqst.updateOne(
          { _id: req.body.setid },
          { $set: { status: "Available" } },
          (err, result) => {
            if (err) {
              console.log("record3");
              res.send("err");
            }
            if (result) {
              res.json({
                success: true,
                message: "Order Cancelled"
              });
            }
          }
        );
      }
    });
  }
};
