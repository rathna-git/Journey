import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();
const authController = {};

/* REGISTER USER */
authController.register = async(req, res) => {
    try{
        const{firstName, lastName, email, password, picturePath, friends} = req.body;
        //create a random salt provide by bcrypt
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            firstName, 
            lastName, 
            email, 
            password: passwordHash, 
            picturePath, 
            friends,
        });
        console.log(newUser);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error: err.message});
    }
};

/* LOG IN */
authController.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email});
        if(!user) return res.status(400).json({msg: 'User does not exist!'});

        const isMatch = await bcrypt.compare(password, user.password);
        // console.log('isMatch: ' , isMatch)
        if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials!'});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
        delete user.password; //delete password so that it is not sent back to the frontend
        res.status(200).json({token, user});

    } catch(err){
        res.status(500).json({error: err.message});
    }
};

export default authController;