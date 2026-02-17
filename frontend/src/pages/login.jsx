import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext.jsx";
import {login} from "../api/auth.js"
import LoadSpinner from "../components/PageLoader.jsx"
import styles from "./login.module.css"
import {Link} from "react-router-dom"

function Login(){
    const navigate = useNavigate();
    const {setUser} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function saveInputEmail(input){
        setEmail(input.target.value);
    }
    
    function saveInputPassword(input){
        setPassword(input.target.value);
    }

    async function loginButton(){
        try{
            setLoading(true);
            const result = await login(email, password);

            navigate("/");
            setUser(result.user); 
        } catch(error){
            setError(error.message || "An error occurred during login");
            console.log(error);
        } finally{
            setLoading(false);
        }
    }

    if(loading){
        return(
            <div>
                <LoadSpinner/>

            </div>
        )
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
                        disabled={loading}
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
                    onClick = {loginButton}
                    disabled = {loading}

                >Login</button>
                <div className={styles.footer}>
                    Don't have an account? <Link to="/register" className={styles.link}>Sign Up</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;