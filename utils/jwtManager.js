const jwt = require("jsonwebtoken");

const maxTime = 3 * 24 * 60 * 60;

const userSign = (user) => {
    return jwt.sign(
        {user_id: user._id},
        "secret-key",{
            expiresIn:maxTime
        }
    )
}

module.exports = {
    userSign
}