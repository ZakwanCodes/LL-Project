const BASE_URL = "http://localhost:3000/api/auth";

export async function register(email, userName, password){
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({email, userName, password})
    });
    return response.json();
}

export async function login(email, password){
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        credentials: "include",
        body: JSON.stringify({email, password})
    });

    return response.json();

}

export async function logout(){
    const response = await fetch(`${BASE_URL}/logout`,{
        method: "POST",
        credentials: "include"
    });
    return response.json();
}
export async function getMe(){
    const response = await fetch(`${BASE_URL}/me`,{
        credentials: "include",
    });

    if(!response){
        console.log("Error in getMe api");
    }
    return response.json();
}