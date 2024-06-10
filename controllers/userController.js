const userModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10);
        // console.log('password',password);
        const addUser =  new userModel({name: req.body.name, email: req.body.email, password: password});
        await addUser.save();
        res.status(200).json({message: 'User created successfully'});
        
    }catch(err){
        console.log('errerr in usrrcon',err);
    }
}


exports.logIn = async (req, res) => {
    try {
        const user = await userModel.findOne({email: req.body.email});
        if(user){
            const password = await bcrypt.compare(req.body.password,user.password);
            if(password == true) {
                   const payload = {
                       name: user.name,
                       email: user.email
                   }
                   const token = await jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "1h"});
                   res.status(200).json({status: true, message: 'Login successfull' , token: token});
            }else{
                res.status(401).json({status: false, message: 'Wrong Password'});
            }
      
        }else{
            res.status(401).json({status: false, message: 'Wrong Email'});
        }
    }
    catch(err) {
        console.log('err',err);
        res.status(500).json({status: false, message: 'Internal Server Error'});
    }
  
}