const CONST = require('./jwtsecret')
const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken :   (req, res, next) => {
        console.log('hey')
            if (req.headers['authorization']) {
                try {
                    console.log('token')
                    let authorization = req.headers['authorization'].split(' ');
                    console.log('hey',authorization[0])

                    if (authorization[0] !== 'Bearer') {
                        console.log('invalid request')
                        return res.status(401).json({msg :'invalid request'}); //invalid request
                    } else {
                         console.log('iam token ')
                         jwt.verify(authorization[1], CONST.SECRET,(err, decode)=>{
                             console.log('verified')
                            if(err){
                                return res.status(500).json({auth : false,msg : "err"})
                            }else {
                                req.body.email = decode.id
                                console.log("success",req.body.email)
                                next();
                            }
                        }); 
                    }
                } catch (err) { 
                    return res.status(403).json({msg :'invalid request'}); //invalid token
                }
            } else {
                return res.status(401).json({msg :'invalid request'});
            }
        }
    }
 