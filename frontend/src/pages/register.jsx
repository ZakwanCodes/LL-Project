import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";
import {register} from "../api/auth.js"
import LoadSpinner from "../components/PageLoader.jsx";
import styles from "./register.module.css"



function Register(){
    const navigate = useNavigate();
    const {setUser} = useAuth();

    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    function saveInputUsername(input){
        setUsername(input.target.value);
    }
    function saveInputEmail(input){
        setEmail(input.target.value);
    }
    function saveInputPassword(input){
        setPassword(input.target.value);
    }

    async function registerButton(){
        try{
            setLoading(true);

            const result = await register(email, username, password);

            setUser(result.user);   
            navigate("/");
        } catch(error){
            setError(error.message);
            console.log(error);
        } finally{
            setLoading(false);
        }
    }
    if(loading){
        return (
            <LoadSpinner/>
        )
    }
    
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.title}>
                    Create Account
                </div>
                {error && <div className = {styles.error}> {error} </div>}
                <div className={styles.formGroup}>
                    <label className={styles.label}>User Name</label>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter your username"
                        value = {username}
                        onChange = {saveInputUsername}
                        disabled = {loading}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Enter your email"
                        value = {email}
                        onChange = {saveInputEmail}
                        disabled = {loading}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        placeholder="Enter your password"
                        value = {password}
                        onChange = {saveInputPassword}
                        disabled = {loading}
                    />
                </div>
                <button
                    className={styles.button}
                    onClick = {registerButton}
                    disabled = {loading}
                >Register</button>
                <div className={styles.footer}>
                    Already have an account? <a href="/login" className={styles.link}>Sign In</a>
                </div>
            </div>
        </div>
    );
}
export default Register;