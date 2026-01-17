import User from "../models/user.js"
import jwt from "jsonwebtoken"



export async function register(req, res) {

    const {email, userName, password} = req.body;

    try{    
        if(!email || !userName || !password){
            return res.status(400).json({"message" : "All fields are required"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({"message" : "User already registered"});
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
        
        //create user token
        const token = jwt.sign({id : newUser._id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "7d",
        });

        //send the token in cookie format 
        res.cookie("jwt", token,{
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true, // prevent XSS attacks,
            sameSite: "strict", // prevent CSRF attacks
            secure: process.env.NODE_ENV === "production",
        });

        return res.status(201).json({success: true, user: newUser});

        
    } catch(error){
        console.log("Error in register controller", error);
        return res.status(500).json({"message": "internal server error"});
    }
}

export async function login() {

}

export async function logout() {

}

