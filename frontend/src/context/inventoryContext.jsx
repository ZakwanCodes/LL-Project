import { createContext, useContext, useState, useEffect } from "react";
import { addToInventory, removeOne, removeAll } from "../api/inventory.js";

const InventoryContext = createContext();

export function InventoryProvider({ children }) {
    const [inventory, setInventory] = useState([]);

    // Fetch initial inventory from backend
    useEffect(() => {
        async function fetchInventory() {
            try {
                const res = await fetch("/api/inventory"); // your GET route
                const data =  await res.json();
                setInventory(data);
                localStorage.setItem("inventory", JSON.stringify(data));
            } catch (err) {
                console.error(err);
            }
        }

        // check localStorage first
        const localData = localStorage.getItem("inventory");
        if (localData) {
            setInventory(JSON.parse(localData));
        } else {
            fetchInventory();
        }
    }, []);

    // Add Loomian
    const addLoom = async (loomianId) => {
        try {
            const data = await addToInventory(loomianId); // API call
            setInventory(data);
            localStorage.setItem("inventory", JSON.stringify(data));
        } catch (err) {
            console.error(err);
        }
    };

    // Remove one
    const removeOneLoom = async (loomianId) => {
        try {
            const data = await removeOne(loomianId); // API call
            setInventory(data);
            localStorage.setItem("inventory", JSON.stringify(data));
        } catch (err) {
            console.error(err);
        }
    };

    // Remove all
    const removeAllLoom = async (loomianId) => {
        try {
            const data = await removeAll(loomianId); // API call
            setInventory(data);
            localStorage.setItem("inventory", JSON.stringify(data));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <InventoryContext.Provider value={{ inventory, addLoom, removeOneLoom, removeAllLoom }}>
            {children}
        </InventoryContext.Provider>
    );
}

export function useInventory() {
    return useContext(InventoryContext);
}
