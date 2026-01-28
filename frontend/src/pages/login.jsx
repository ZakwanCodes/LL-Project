import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext.jsx";
import "./login.css"
import {login} from "../api/auth.js"


function Login(){
    const {setUser} = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function saveInputEmail(input){
        setEmail(input.target.value);
    }
    
    function saveInputPassword(input){
        setPassword(input.target.value);
    }

    async function loginButton(){
        try{
            const result = await login(email, password);
            setUser(result.user); 
            navigate("/");
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-title">
                    Login
                </div>
                <div className="login-formGroup">
                    <label className="login-label">Email</label>
                    <input
                        className="login-input"
                        type="email"
                        placeholder="Enter your email"
                        value = {email}
                        onChange = {saveInputEmail}
                    />
                </div>
                <div className="login-formGroup">
                    <label className="login-label">Password</label>
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Enter your password"
                        value = {password}
                        onChange = {saveInputPassword}
                    />
                </div>
                <button
                    className="login-button"
                    onClick = {loginButton}
                >Login</button>
                <div className="login-footer">
                    Don't have an account? <a href="/register" className="login-link">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;