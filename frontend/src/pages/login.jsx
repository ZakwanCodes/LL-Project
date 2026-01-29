import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext.jsx";
import styles from "./login.module.css"
import {login} from "../api/auth.js"


function Login(){
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function saveInputEmail(input){
        setEmail(input.target.value);
    }
    
    function saveInputPassword(input){
        setPassword(input.target.value);
    }

    async function loginButton(){
        try{
            setError(""); // Clear any previous errors
            const result = await login(email, password);
            
            // Check if login failed (backend returns message on error)
            if(result.message){
                setError(result.message);
                return;
            }
            
            setUser(result.user); 
            navigate("/");
        } catch(error){
            setError("An error occurred during login");
            console.log(error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.title}>
                    Login
                </div>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Enter your email"
                        value = {email}
                        onChange = {saveInputEmail}
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
                    />
                </div>
                <button
                    className={styles.button}
                    onClick = {loginButton}
                >Login</button>
                <div className={styles.footer}>
                    Don't have an account? <a href="/register" className={styles.link}>Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;