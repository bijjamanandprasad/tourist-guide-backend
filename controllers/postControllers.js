
const visits = async (req,res,next) => {


    try{
        // const {name, email, password} = req.body;

        // const user = await UserModel.create({name,email,password});
       


        res.status(201).json({created: true});

    }catch(error){

        console.log(error);
        res.json({created: false, errors:"Image post is failed" });

    }

}


module.exports = {
    visits
}