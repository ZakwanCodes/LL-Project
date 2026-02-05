import Navbar from "../components/Navbar.jsx"
import {useEffect, useState} from "react"
import { getAllLoomians } from "../api/loomian.js";
import styles from "./homepage.module.css"

function Homepage(){

  const [loomians, setLoomians] = useState([]);

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
        {loomians.map((loomian) => (
          <div key={loomian._id} className={styles.loomianCard}>
            <img 
              src={loomian.image} 
              alt={loomian.image}
              className={styles.loomianImage}
            />
            <h3 className={styles.loomianName}>{loomian.name}</h3>
            <button className = {styles.addToInventoryButton}>Add to Inventory</button>
          </div>
        ))}
      </div>
     
    </div>
  );
}


export default Homepage;