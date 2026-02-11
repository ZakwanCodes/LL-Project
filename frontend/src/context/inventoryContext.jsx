import { createContext, useContext, useState, useEffect } from "react";
import { addToInventory, removeOne, removeAll } from "../api/inventory.js";

const InventoryContext = createContext();

export function InventoryProvider({ children }) {
    const [inventory, setInventory] = useState([]);
    const [isAdding, setIsAdding] = useState({});
    const [isRemovingOne, setIsRemovingOne] = useState({});
    const [isRemovingAll, setIsRemovingAll] = useState(false);

    const [error, setError] = useState(null);

    
    // Add Loomian
    const addLoom = async (loomianId) => {
        try {
            setIsAdding(prev => ({...prev, [loomianId] : true}));
            const data = await addToInventory(loomianId); // API call
            setInventory(data);
            localStorage.setItem("inventory", JSON.stringify(data));
            //instead of using finally, force user to wait half a second to avoid api spam
            setTimeout(() => {
                setIsAdding(prev => ({...prev, [loomianId] : false}));
            }, 500);
        } catch (err) {
            setError(err.message);
            console.error(err);
        }

    };

    // Remove one
    const removeOneLoom = async (loomianId) => {
        try {
            setIsRemovingOne(prev => ({...prev, [loomianId] : true}));
            const data = await removeOne(loomianId); // API call
            setInventory(data);
            localStorage.setItem("inventory", JSON.stringify(data));
            setTimeout(() => {
                setIsRemovingOne(prev => ({...prev, [loomianId] : false}));
            }, 500);
        } catch (err) {
            setError(err.message);
            console.error(err);
        }
    };

    // Remove all
    const removeAllLoom = async (loomianId) => {
        try {
            setIsRemovingAll(true);
            const data = await removeAll(loomianId); // API call
            setInventory(data);
            localStorage.setItem("inventory", JSON.stringify(data));
        } catch (err) {
            setError(err.message);
            console.error(err);
        }  finally{
            setIsRemovingAll(false);
        }
    };

   useEffect(() => {
    const saved = localStorage.getItem("inventory");

    if (saved && saved !== "undefined") {
        try {
            setInventory(JSON.parse(saved));
        } catch (error) {
            console.error("Invalid JSON in localStorage");
            setInventory([]);
        }
        } else {
            setInventory([]);
        }
    }, []);

    return (
        <InventoryContext.Provider value={{ inventory, addLoom, removeOneLoom, removeAllLoom, isAdding, isRemovingOne, isRemovingAll}}>
            {children}
        </InventoryContext.Provider>
    );
}

export function useInventory() {
    return useContext(InventoryContext);
}
