const express = require('express'),
    routes = require('express').Router(),
    auth = require('../controller/auth-controller'),
    user = require('../controller/request-controller'),
    chk = require('../services/jwt-check'),
    multer = require('multer');


// AuthRoute Handler
routes.post('/register', auth.registerController)
routes.post('/login', auth.loginController)

// user control

// ===multer setting
routes.use(express.static(__dirname + "./public/"))

var Storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
        cb(null, file.filename + "_" + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: Storage
}).single('file')
// ==========

routes.post('/newuser', upload, chk.verifyToken, user.createRequests)
routes.get('/getuser', user.getRequestCntrl)

// test
routes.get('/pro', chk.verifyToken, user.getRequestCntrl)

routes.get('/get', user.getAllUser)
routes.post('/aminlogin', auth.adminLoginController)

module.exports = routes;

