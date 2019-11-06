const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtsecret = require('../config/jwt-config')
const maindb = require('../models/user-model');

const registerController = (req, res, next) => {
      mongoose.set('useFindAndModify', false);
      maindb.findOne({ email: req.body.email }, (err, user) => {
            if (err) { console.log('error') }
            if (user) res.json({ message: 'user exist', success: false })
            else {
                  // You use the object resolution to get the params from req.body
                  // Then you use them directly in the object. This improves readability
                  let { fname, lname, phone, email, password } = req.body;

                  // { fname : xyz } is equal to { fname }
                  // During compile time { fname } is expanded to { fname : xyz }
                  const user = new maindb({
                        fname, lname, phone, email, password
                  })

                  // Try using promises here. 'await' keyword.
                  // try { await user.save() } catch(err) {};
                  user.save((err) => {
                        if (err) res.json({ err: 'err' })
                        console.log("saved succffully")
                        res.json({
                              message: "Data saved",
                              success: true
                        })
                  })
            }
      })
}

const loginController = (req, res, next) => {
      mongoose.set('useFindAndModify', false);
      if (req.body.email == undefined) {
            res.json(
                  {
                        success: false,
                        message: "please enter your email and password"

                  })
            return false
      }
      console.log(req.body.email);
      maindb.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                  throw err;
            }

            if (user) {
                  if (user.password != req.body.password) {
                        res
                              .json(
                                    {
                                          success: false,
                                          message: "user not found"

                                    })
                  } else {
                        const token = jwt.sign({ id: user.email },
                              jwtsecret.SECRET,
                              { expiresIn: '24h' });
                        res.json({
                              token: token,
                              message: 'your are logged-in',
                              success: true
                        })
                  }
            } else {

                  res.json({
                        data: false,
                        message: "user not found"
                  })

            }
      })
}

const adminLoginController = (req, res, next) => {
      mongoose.set('useFindAndModify', false);
      if (req.body.email == undefined) {
            res.json({
                  success: false,
                  message: "please enter your email and password"
            })
            return false
      }
      console.log(req.body.email);
      if (req.body.email == "Admin@food.com" && req.body.password == "admin") {
            const adminToken = jwt.sign({ id: "admin" },
                  jwtsecret.ADMINSECRET,
                  { expiresIn: '24h' });
            res.json({
                  adminToken: adminToken,
                  message: 'your are logged-in',
                  success: true
            })

      } else {
            res.json({
                  success: false,
                  message: "user not found"
            })
      }
}


module.exports = {
      registerController,
      loginController,
      adminLoginController
}