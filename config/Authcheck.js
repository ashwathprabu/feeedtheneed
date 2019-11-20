const CONST = require("./jwtsecret");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      let authorization = req.headers["authorization"].split(" ");
      if (authorization[0] !== "Bearer") {
        return res.status(401).json({ msg: "invalid request" });
      } else {
        jwt.verify(authorization[1], CONST.SECRET, (err, decode) => {
          if (err) {
            console.log("err", err);
            return res.status(500).json({ auth: false, msg: "err" });
          } else {
            req.body.email = decode.id;
            next();
          }
        });
      }
    } catch (err) {
      return res.status(403).json({ msg: "invalid request" });
    }
  } else {
    return res.status(401).json({ msg: "invalid request" });
  }
};
const AuthverifyToken = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      let authorization = req.headers["authorization"].split(" ");
      if (authorization[0] !== "Bearer") {
        return res.status(401).json({ msg: "invalid request" });
      } else {
        jwt.verify(authorization[1], CONST.SECRET, (err, decode) => {
          if (err) {
            console.log("err", err);
            return res.status(500).json({ auth: false, msg: "err" });
          } else {
            next();
          }
        });
      }
    } catch (err) {
      return res.status(403).json({ msg: "invalid request" });
    }
  } else {
    return res.status(401).json({ msg: "invalid request" });
  }
};
const AuthverifyTokenauth = (req, res, next) => {
  if (req.headers["authorization"]) {
    try {
      let authorization = req.headers["authorization"].split(" ");
      if (authorization[0] !== "Bearer") {
        return res.status(401).json({ msg: "invalid request" });
      } else {
        jwt.verify(authorization[1], CONST.SECRET, (err, decode) => {
          if (err) {
            console.log("err", err);
            return res.status(500).json({ auth: false, msg: "err" });
          } else {
            req.body.mail = decode.id;
            console.log("Hey auth3", req.body.mail);
            next();
          }
        });
      }
    } catch (err) {
      return res.status(403).json({ msg: "invalid request" });
    }
  } else {
    return res.status(401).json({ msg: "invalid request" });
  }
};

module.exports = { verifyToken, AuthverifyToken, AuthverifyTokenauth };
