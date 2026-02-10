import {createContext, useState, useContext} from "react"
import { addToInventory, removeOne, removeAll } from "../api/inventory";

const InventoryContext = createContext();

export function InventoryProvider({children}){
    const [inventory, setInventory] = useState([]);

    async function addLoom(loomianId){
        const data = await addToInventory(loomianId);
        setInventory(data);
    }

    async function removeOneLoom(loomianId){
        const data = await removeOne(loomianId);
        setInventory(data);
    }

    async function removeAllLoom(loomianId){
        const data = await removeAll(loomianId);
        setInventory(data);
    }

    return(
        <InventoryContext.Provider value = {{inventory, setInventory, addLoom, removeOneLoom, removeAllLoom}}>
            {children}
        </InventoryContext.Provider>
    )
}

export function useInventory(){
    return useContext(InventoryContext);
}