const BASE_URL = "http://localhost:3000/api/inventory";

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