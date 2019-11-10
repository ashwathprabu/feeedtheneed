const express = require('express');
const routes   = require('express').Router(); 
const auth = require('../controller/authControl')
const user = require('../controller/requestController')
const chk = require('../config/Authcheck')
const multer  = require('multer')
const Media = require('../models/media')


 
// AuthRoute Handler
routes.post('/register',auth.registerController)
routes.post('/login',auth.loginController)

// user control
routes.post('/newuser',chk.verifyToken, user.createRequests)
routes.get('/getuser',user.getRequestCntrl)

// test
routes.get('/pro',chk.verifyToken,user.getRequestCntrl)
 
routes.get('/get',chk.verifyToken,user.getAllDonation)
routes.post('/aminlogin',auth.adminLoginController)

routes.post('/deldonation',chk.verifyToken,user.delUserCntrl)

// Add New Media File
// configuring File Upload
// const storage = multer.diskStorage({
//     // set uploads folder
//     destination: (req, file, cb) => {
//         cb(null, 'ng-src/src/assets/uploads');
//     },
//     // set default filename
//     filename: (req, file, cb) => {
//         cb(null, file.originalname); // overwrites current file with same name!!!
//     }
// });

// const upload = multer({ storage: storage })

// routes.post('/upload', upload.single('file'), (req, res, next) => {
//     console.log('post file with content:');
//     console.log(req.file);
//     // Initializing Media Info
//     let newFile = new Media({
//         filePath: 'assets\/uploads\/' + req.file.filename, 
//     });
//     newFile.save((err) => {
//         if (err) {
//               res.json({
//                     err: 'err'
//               })
//         }
//         console.log("saved succffully")
//         res.json({
//               message: "Data saved",
//               success: true
//         })
//   })
 
// }) 
    // Add File to DB
//     Media.addNewFile(newFile, (err, result) => {
//         if (err) {
//             res.status(500).json({ success: false, msg: 'Image Not added to DB. Error: ' + err });
//         } else {
//             res.status(200).json({ success: true, msg: 'Image Added to DB! ' + result });
//         }
//     });
// });



module.exports = routes;

