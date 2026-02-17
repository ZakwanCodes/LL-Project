import { API_ROUTES } from "../config/api.js";

const BASE_URL = API_ROUTES.inventory;

export async function addToInventory (id){
    const response = await fetch(`${BASE_URL}/`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        }, 
        credentials: "include",
        body: JSON.stringify({
            loomianId : id
        })
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "login failed")
    }

    return data;
}

export async function removeOne(id){
        const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json"
        },
        credentials : "include"
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "login failed")
    }

    return data;
}

export async function removeAll(id){
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
        },
        credentials : "include"
    });

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "login failed")
    }

    return data;
}