import Navbar from "../components/Navbar.jsx"
import {useEffect, useState} from "react"
import { getAllLoomians } from "../api/loomian.js"
import styles from "./homepage.module.css"
import {Link} from "react-router-dom"
import { useInventory } from "../context/inventoryContext.jsx"    
import { useSearch } from "../context/searchContext.jsx"
import LoadSpinner from "../components/PageLoader.jsx"

function Homepage(){

  const [loomians, setLoomians] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const {addLoom, isAdding, isAddingError} = useInventory(); 

  useEffect(() => {
    async function fetchLoomians(){
      try{
        setLoading(true);
        const data = await getAllLoomians();
        setLoomians(data.loomians);        
      } catch(error){
        setError(error.message);
        console.log(error);
      } finally{
        setLoading(false);
      }
    }
    fetchLoomians();
  }, []); 

  if(loading){
    return (
        <LoadSpinner/>
    )
  }

  const {searchInput} = useSearch();
  
  const filteredLoomians = loomians.filter(function (loomian) {
    return loomian.name.toLowerCase().includes(searchInput.toLowerCase());
   });  
  
  
    return (
    <div>
        <Navbar/>
        <div className={styles.loomianGrid}>
            {filteredLoomians.map(function (loomian) {
                return (
                    <div key={loomian._id} className={styles.loomianCard}>
                        <Link to={`/loomian/${loomian._id}`}>
                            <img
                                src={loomian.image}
                                alt={loomian.name}
                                className={styles.loomianImage}
                            />
                        </Link>

                        <h3 className={styles.loomianName}>
                            {loomian.name}
                        </h3>

                        <button
                            onClick={function () {
                                addLoom(loomian._id);
                            }}
                            className={styles.addToInventoryButton}
                            disabled={isAdding[loomian._id]}
                        >
                            {isAdding[loomian._id]? "Adding..." : "Add to Inventory"}

                        </button>
                    </div>
                );
            })}
        </div>
    </div>
);
}



export default Homepage;