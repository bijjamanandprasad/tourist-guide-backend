
const UserModel = require('../models/UserModel');
const { handleErrors } = require('../utils/errorHandlers');
const { userSign } = require('../utils/jwtManager');


const register = async (req,res,next) => {
 
    try{
        const {name, email, password} = req.body;

        const user = await UserModel.create({name,email,password});
        const token = userSign(user);

        // res.cookie("jwt", token, {
        //     httpOnly : false,
        //     maxAge : 3 * 24 * 60 * 60 * 1000
        // })

        // localStorage.setItem('x-access-user',token);

        res.status(201).json({user:user._id, token:token, created: true});

    }catch(error){

        console.log(error);
        const errors = handleErrors(error);
        res.json({ errors, created: false });

    }
}

const login = async (req,res,next) => {
        try {
          const { email, password } = req.body;
          const user = await UserModel.login(email, password);
          const token = userSign(user);

          // res.cookie("jwt", token, { httpOnly: false, maxAge: 3 * 24 * 60 * 60 * 1000 });

        // localStorage.setItem('x-access-user',token);
          res.status(200).json({ user: user._id, token:token, status: true });
        } catch (err) {
          const errors = handleErrors(err);
          res.json({ errors, status: false });
        }
}

module.exports = {
    register,
    login
}