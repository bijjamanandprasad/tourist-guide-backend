const User = require("../models/UserModel");

const jwt = require("jsonwebtoken");

const checkUser = async (req, res, next) => {
  const {token} = req.body;
  console.log(token + "aaa");
  if (token) {
    jwt.verify(
      token,
      "secret-key",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false, verify:'failed' });
          next();
        } else {
          const user = await User.findById(decodedToken.user_id);
          if (user) res.json({ status: true, user: user.email });
          else res.json({ status: false,user_auth:decodedToken.user_id });
          next();
        }
      }
    );
  } else {
    res.json({ status: false, headers:"fail" });
    next();
  }
};

module.exports = {
    checkUser
}