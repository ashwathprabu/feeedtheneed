const express = require("express");
const routes = require("express").Router();
const jwt = require("jsonwebtoken");
const jwtsecret = require("../config/jwtsecret");
const maindb = require("../models/user");
const reqst = require("../models/Requests");
const mongoose = require("mongoose");
const foodord = require("../models/foodord");
const multer = require("multer");

module.exports = {
  createRequests: (req, res) => {
    mongoose.set("useFindAndModify", false);
    if (
      req.body.email == null ||
      req.body.title == null ||
      req.body.loc == null ||
      req.body.phone == null ||
      req.body.date == null
    ) {
      res.json({
        success: false,
        message: "please enter your food details"
      });
      return false;
    }
    console.log("try and catch");
    if (req.body.email == undefined) {
      res.json({
        success: false,
        message: "please enter your credentials!"
      });
      return false;
    }

    const rqst = new reqst();
    rqst.email = req.body.email;
    rqst.title = req.body.title;
    rqst.loc = req.body.loc;
    rqst.phone = req.body.phone;
    rqst.expdate = req.body.date;
    rqst.desc = req.body.desc;
    rqst.status = "Available";
    console.log("get1");
    rqst
      .save()
      .then(result => {
        console.log("get1");
        maindb.findOne({ email: rqst.email }, (err, user) => {
          if (err) {
            console.log("err");
          }
          console.log("getpass");
          if (user) {
            user.requests.push(rqst);
            user.save();
            // console.log('success')
            console.log(user);
            res.json({
              success: true,
              message: "Your Donation is successfully added"
            });
          } else {
            res.send("fail");
          }
        });
      })
      .catch(error => {
        console.log(err);
        res.json("error");
      });
  },

  getRequestCntrl: (req, res) => {
    console.log("get user ", req.body.email);
    //    res.send('hey there')
    maindb
      .findOne({ email: req.body.email })
      .populate("requests")
      .then(result => {
        if (result) {
          res.json(result.requests);
        } else {
          res.send("er");
        }
      })
      .catch(error => {
        res.status(500).json({ error });
      });
    // res.send("hey")
  },
  getAllDonation: (req, res) => {
    reqst.find(
      {
        $or: [
          {
            createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000 * 2) }
          },
          { title: "non-perishable" }
        ]
      },
      (err, result) => {
        if (err) {
          res.json({ err: "err " });
        }
        if (result) {
          res.json(result);
        }
      }
    );
  },

  delUserCntrl: (req, res, next) => {
    mongoose.set("useFindAndModify", false);
    reqst.findOne({ _id: req.body.id }, (err, user) => {
      console.log("record");
      if (err) {
        console.log("err");
      }
      console.log("record pass", req.body.id);
      if (user) {
        reqst.findOneAndDelete({ _id: req.body.id }, (err, result) => {
          if (err) {
            console.log("record3");
            res.send("err");
          }
          if (result) {
            res.json({
              success: true,
              message: "Your Donation has been deleted"
            });
          }
        });
      } else {
        console.log("record not found");
        res.json({
          success: false,
          message: "Item Not found"
        });
      }
    });
  },
  myOrderCntrl: (req, res) => {
    mongoose.set("useFindAndModify", false);
    console.log(req.body.id);
    if (req.body.mail == null) {
      res.json({
        success: false,
        message: "please send valid food details"
      });
      return false;
    }
    console.log("order");
    if (req.body.email == undefined) {
      res.json({
        success: false,
        message: "please enter your credentials!"
      });
      return false;
    }
    if (req.body.mail == req.body.email) {
      res.json({
        success: false,
        message: "you can't order your own food"
      });
      return false;
    } else {
      const rqst = new foodord();
      rqst.email = req.body.mail;
      rqst.id = req.body.id;
      rqst.title = req.body.title;
      rqst.loc = req.body.loc;
      rqst.phone = req.body.phone;
      rqst.expdate = req.body.expdate;
      rqst.desc = req.body.desc;
      rqst.status = "Available";
      console.log("get1");
      rqst
        .save()
        .then(result => {
          console.log("get1");
          maindb.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
              console.log("err");
            }
            console.log("getpass");
            if (user) {
              user.myord.push(rqst);
              user.save();
              // console.log('success')
              console.log(user);
              // ===============deleting Order===========

              reqst.findOne({ _id: req.body.id }, (err, user) => {
                console.log("record");
                if (err) {
                  console.log("err");
                }
                console.log("record pass", req.body.id);
                console.log("record pass", req.body.email);
                if (user) {
                  reqst.updateOne(
                    { _id: req.body.id },
                    { $set: { status: "Not Available" } },
                    (err, result) => {
                      if (err) {
                        console.log("record3");
                        res.send("err");
                      }
                      if (result) {
                        res.json({
                          success: true,
                          message: "Order Successfull...!"
                        });
                      }
                    }
                  );
                } else {
                  console.log("record not found");
                  res.json({
                    success: false,
                    message: "Item Not found"
                  });
                }
              });

              // ========================================
            } else {
              res.send("fail");
            }
          });
        })
        .catch(error => {
          console.log(err);
          res.json("error");
        });
    }
  },
  getMyorderdcntrl: (req, res) => {
    foodord.find({ email: req.body.email }, (err, result) => {
      if (err) {
        console.log("record3");
        res.send("err");
      }
      if (result) {
        console.log("my orders", result);
        res.json(result);
      }
    });

    // console.log("get user ", req.body.email);
    // //    res.send('hey there')
    // maindb
    //   .findOne({ email: req.body.email })
    //   .populate("myord")
    //   .then(result => {
    //     if (result) {
    //       res.json(result.myord);
    //     } else {
    //       res.send("er");
    //     }
    //   })
    //   .catch(error => {
    //     res.status(500).json({ error });
    //   });
    // // res.send("hey")
  }
};
