import Navbar from "../components/Navbar.jsx"
import { useInventory } from "../context/inventoryContext.jsx";
import styles from "./inventory.module.css"
import {useSearch} from "../context/searchContext.jsx"
import {useEffect} from "react";
import LoadSpinner from "../components/PageLoader.jsx"

function InventoryPage(){

    
    
    const {inventory, removeOneLoom, removeAllLoom, isRemovingOne, isRemovingAll} = useInventory();

    const {searchInput} = useSearch();

    const filteredLoomians = inventory.filter(function (inv) {
        return inv.loomian.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <div>
            <Navbar/>
            <div className = {styles.container}>
                {filteredLoomians.map((loom) => {
                    return <div key = {loom._id} className = {styles.loomianCard}>
                         <img 
                         src = {loom.loomian.image}
                         className = {styles.image}
                         />
                        <div className = {styles.stats}>
                            Quantity: {loom.quantity}x
                        </div>
                        <div className = {styles.stats}>
                            Value: {loom.loomian.value * loom.quantity} gr
                        </div>
                        <div className = {styles.removeButtons}>
                            <button 
                            onClick = {() => removeOneLoom(loom.loomian._id)}
                            className = {styles.specificButton}
                            disabled = {isRemovingOne[loom.loomian._id]}
                            >
                                {isRemovingOne[loom.loomian._id] ? "Removing..." : "Remove one"}
                            </button>
                            <button 
                            onClick = {() => removeAllLoom(loom.loomian._id)}
                            className = {styles.specificButton}
                            disabled = {isRemovingAll}
                            >
                                {isRemovingAll ? "Removing..." : "Remove All"}
                            </button>
                        </div>
                        
                    </div>  
                })}
            </div> 
        </div>
        
        
    );

}

export default InventoryPage;