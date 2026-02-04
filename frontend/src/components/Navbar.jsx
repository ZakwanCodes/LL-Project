import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext.jsx";
import { logout } from "../api/auth.js";

function Navbar(){
    const { setUser } = useAuth();
    const navigate = useNavigate();

    async function logoutButton(){
        try{
            await logout();
            setUser(null);
            navigate("/login");
        } catch(error){
            console.log(error);
        }
    }

    return(

        <nav className = {styles.container}>

            <div className = {styles.search}>
                <img src="/searchicon.png" className={styles.icon} alt="search icon" />
                <input className={styles.searchInput} />
            </div>

            <div className = {styles.homepage}>
                <Link to = "/" className={styles.link}>Homepage</Link>
            </div>

            <div className = {styles.inventory}>
                <img src="/backpackicon.png" className={styles.icon} alt="backpack icon" />
                <Link to = "/inventory" className={styles.link}>Inventory</Link>
            </div>

            <div className = {styles.logout}>
                <button className={styles.logoutButton} onClick={logoutButton}>
                    Logout
                </button>
            </div>

        </nav>
    );
}

export default Navbar;