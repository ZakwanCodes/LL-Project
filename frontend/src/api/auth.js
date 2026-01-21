const BASE_URL = "http://localhost:3000/api/auth";

export async function register(email, userName, password){
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({email, userName, password})
    });
    const data = await response.json();
    return data;
}