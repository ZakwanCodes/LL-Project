import Navbar from "../components/Navbar.jsx"
import {useEffect, useState} from "react"
import { getAllLoomians } from "../api/loomian.js"
import styles from "./homepage.module.css"
import {Link} from "react-router-dom"
import { useInventory } from "../context/inventoryContext.jsx"    

function Homepage(){

  const [loomians, setLoomians] = useState([]);
  //fix: const {inventoryId, setInventoryId} = useInventory(); 

  useEffect(() => {
    async function fetchLoomians(){
      try{
        const data = await getAllLoomians();
        setLoomians(data.loomians);        
      } catch(error){
        console.log(error);
      }
    }
    fetchLoomians();
  }, []); 

  return(

    <div>
      <Navbar/>

      <div className={styles.loomianGrid}>
        {loomians.map((loomian) => {
          return <div key={loomian._id} className={styles.loomianCard}>
            <Link to = {`/loomian/${loomian._id}`}>
            <img 
              src={loomian.image} 
              alt={loomian.image}
              className={styles.loomianImage}
            />
            <h3 className={styles.loomianName}>{loomian.name}</h3>
            </Link>
            <button 
              onClick={() => {
                setInventoryId(prev => [...prev, loomian._id]);
              }}
              className = {styles.addToInventoryButton}>
              Add to Inventory </button>
          </div>
        })}
      </div>
     
    </div>
  );
}


export default Homepage;