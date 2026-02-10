const BASE_URL = "http://localhost:3000/api/loomian";



export async function getAllLoomians(){
    const response = await fetch(`${BASE_URL}/`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        },
        credentials: "include",
    });
    const data = await response.json();
    return data;
}

export async function getLoomianById(id){
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
        },
        credentials: "include"
    });

    const data = await response.json();
    return data;
}