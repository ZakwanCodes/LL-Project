import jwt from "jsonwebtoken"
import User from "../models/user.js"

const protectedRoute = async (req, res, next) => {

    try{
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ message : "Unauthorized - no token provided"});
        }

        //verify the jwt token (makes sure token wasn't tampered with) & extracts the payload
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        if(!decoded){
            return res.status(401).json({message : "Unauthorized - invalid token"});
        }

        //decoded contains the id from payload now we search for the user in the db
        const user = await User.findById(decoded.id).select("-password");

        if(!user){
            return res.status(401).json({message : "Unauthorized - user not found"});
        }

        //pass 
        req.user = user;

        next();


    }catch(error){
        console.log(error);
        res.status(500).json({ message : "Internal server error"});
    }
    


}

export default protectedRoute;