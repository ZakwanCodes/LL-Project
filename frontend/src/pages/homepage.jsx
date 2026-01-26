import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext.jsx";
import {logout} from "../api/auth.js"

function Homepage(){
    const navigate = useNavigate();
    const { setUser } = useAuth();
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

    <div>
      <button
        onClick = {logoutButton}
      >Logout </button>
    </div>
  )
}


export default Homepage;