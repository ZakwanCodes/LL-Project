import User from "../models/user.js"


export async function register(req, res) {
    const {userName, password} = req.body;

    if(!userName || !password){
        return res.status()
    }
    const newUser = await User.create({
        userName,
        password,
    });

    res.status(201).json({success: true, user: newUser});
    
}

export async function login() {

}

export async function logout() {

}

