import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getLoomianById } from "../api/loomian.js"
import Navbar from "../components/Navbar.jsx"
import styles from "./loomianDetails.module.css"

function LoomianDetails() {
  // useParams takes the id portion of the URL from <Link/> in homepage
  // and returns it as an object. (Dynamic URL)
  const { id } = useParams();
  const [loomian, setLoomian] = useState(null);

  useEffect(() => {
    async function fetchLoomian() {
      try {
        const data = await getLoomianById(id);
        setLoomian(data.loomian);
      } catch (error) {
        console.log(error);
      }
    }

    fetchLoomian();
  }, [id]);

  if (!loomian) return <p>Loading...</p>;

  return (
    <div>
        <Navbar/>
        <div className = {styles.container}> 
            <div className={styles.leftSide}>
              <div className={styles.leftSideWrapper}>
                <img src={loomian.image} alt={loomian.name} />

                <div className={styles.metaRow}>
                    <span><strong>Rarity:</strong> {loomian.rarity}</span>
                    <span><strong>Event:</strong> {loomian.event}</span>
                </div> 

                <p className={styles.description}>
                    {loomian.description}
                </p>
              </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.statRow}>
                    <span className = {styles.valueTitle}>Value:</span> 
                    <span className={styles.value}>{loomian.value} gr</span>
                </div>

                <div className={styles.statRow}>
                    <span className = {styles.valueTitle}>Demand:</span>
                    <span className={styles.value}>{loomian.demand}</span>
                </div>
            </div>
        </div> 
    </div>
  );
}

export default LoomianDetails;
