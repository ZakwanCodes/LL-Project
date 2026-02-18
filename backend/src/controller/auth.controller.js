import User from "../models/user.js"
import jwt from "jsonwebtoken"

export async function register(req, res) {

    const {email, userName, password} = req.body;

    try{    
        if(!email || !userName || !password){
            return res.status(400).json({message : "All fields are required"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({message : "User already registered"});
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const newUser = await User.create({
            email,
            userName,
            password,
            });
        
        //create user token (header, payload, signature)
        const token = jwt.sign({id : newUser._id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "7d",
        });

        //send the token in cookie format 
        res.cookie("jwt", token,{
            maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expires in 7 days
            httpOnly: true, // prevent XSS attacks,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
        });

        return res.status(201).json({success: true, user: newUser});

        
    } catch(error){
        console.log("Error in register controller", error);
        return res.status(500).json({message: "internal server error"});
    }
}

export async function login(req, res) {
    const {email, password} = req.body;

    try{
        if(!email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "invalid credentials"});
        }

        const isCorrectPassword = await user.comparePassword(password);
        if(!isCorrectPassword){
            return res.status(401).json({message : "invalid email or password"});
        }

        const token = jwt.sign({id : user._id}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: "7d",
        });

        res.cookie("jwt", token, {
            maxAge : 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            secure: process.env.NODE_ENV === "production",
        });
        
        return res.status(200).json({sucess : true, user})


    } catch(error){
        console.log("Error in the login controller: ", error);
        return res.status(500).json({message: "internal server error"});
    }
}


export async function logout(req, res) {
    res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
    });
    return res.status(200).json({success: true, message: "logout successful"})
}

