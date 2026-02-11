import styles from "./Navbar.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext.jsx"
import { logout } from "../api/auth.js"
import { useSearch } from "../context/searchContext.jsx"
import {useState} from "react"
import LoadSpinner from "./PageLoader.jsx"

function Navbar(){
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const {searchInput, setSearchInput} = useSearch();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function logoutButton(){
        try{
            setLoading(true);
            const data = await logout();
            setUser(null);
            setLoading(false);

            navigate("/login");
            
        } catch(error){
            setError(error.message);
            console.log(error);
        } 
    }

    if(loading){
        return(
            <LoadSpinner/>
        )
    }

    function handleChange(input){
        setSearchInput(input.target.value);
    }

    

    return(

        <nav className = {styles.container}>

            <div className = {styles.search}>
                <img src="/searchicon.png" className={styles.icon} alt="search icon" />
                <input 
                className={styles.searchInput} 
                onChange={handleChange}
                />
            </div>

            <div className = {styles.homepage}>
                <Link to = "/" className={styles.link}>Homepage</Link>
            </div>

            <div className = {styles.inventory}>
                <Link to = "/inventory" className={styles.icon}> 
                <img src="/backpackicon.png" className={styles.icon} alt="backpack icon" />

                </Link>
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