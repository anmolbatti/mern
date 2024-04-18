const Users = require("../models/users");

// create user api
const createUser = async (req, res) => {
    try {
        var checkUser = await Users.findOne({"email": req.body.email});
        if(checkUser){
            return res.status(200).send({
                success: false,
                message: `Email already Exist`,
                data: {
                    user_id: checkUser._id
                }
            });
        }

        var result = await new Users(req.body).save();

        if(result){
            return res.status(200).send({
                success: true,
                message: `User created successfully`,
                data: {
                    user_id: result._id
                }
            });
        }
    } catch (err) {
        res.status(400).send({
            success: false,
            message: `User not created`,
            error: err.message
        });
    }
}


// Login User Api
const loginUser = async (req, res) => {
    try {
        var checkUser = await Users.findOne({"email": req.body.email, "password": req.body.password});
        if(checkUser){
            
        }else{
            return res.status(200).send({
                success: false,
                message: `Email not Exist. Please create new account`,
                data: {
                    user_id: checkUser._id
                }
            });
        }

    } catch (err) {
        res.status(400).send({
            success: false,
            message: `Something went wrong. Please try again later`,
            error: err.message
        });
    }
}

module.exports = {
    createUser,
    loginUser
}