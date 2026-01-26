import {useState} from "react"
import {useNavigate} from "react-router-dom"
import { useAuth } from "../context/authContext.jsx";


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
        <div>
            <div>
                Login
            </div>
            <div>
                Email
            </div>
            <input
                value = {email}
                onChange = {saveInputEmail}
            />
            <div>
                Password
            </div>
            <input
                value = {password}
                onChange = {saveInputPassword}
            />
            <button
                onClick = {loginButton}
            >Login </button>

        </div>
    );
}

export default Login;