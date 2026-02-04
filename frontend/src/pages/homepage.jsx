import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext.jsx"
import {logout} from "../api/auth.js"
import styles from "./homepage.module.css"
import Navbar from "../components/Navbar.jsx"

function Homepage(){

  return(

    <div>
      <Navbar/>
     
    </div>
  );
}


export default Homepage;