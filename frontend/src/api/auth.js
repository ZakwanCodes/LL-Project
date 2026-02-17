import { API_ROUTES } from "../config/api.js";

const BASE_URL = API_ROUTES.auth;

export async function register(email, userName, password){
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({email, userName, password})
    });

    const data = await response.json();
    //response.ok holds a bool value and returns true if status code is between 200-299 else returns false
    if(!response.ok){
        //throw exits the code and jumps to the nearest catch block
        throw new Error(data.message || "registration failed");
    }
    return data;
}

export async function login(email, password){
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        credentials: "include",
        body: JSON.stringify({email, password})
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "login failed")
    }

    return data;
}

export async function logout(){
    const response = await fetch(`${BASE_URL}/logout`,{
        method: "POST",
        credentials: "include"
    });
    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "logout failed")
    }

    return data;
}
export async function getMe(){
    const response = await fetch(`${BASE_URL}/me`,{
        credentials: "include",
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "login failed")
    }

    return data;
}