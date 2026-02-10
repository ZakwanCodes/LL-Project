import {createContext, useState, useContext} from "react"

const InventoryContext = createContext();

//fix
export function InventoryProvider({children}){
    const [inventoryId, setInventoryId] = useState([]);

    return(
        <InventoryContext.Provider value = {{inventoryId, setInventoryId}}>
            {children}
        </InventoryContext.Provider>
    )
}

export function useInventory(){
    return useContext(InventoryContext);
}