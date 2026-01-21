import {useState} from "react"
import {register} from "../api/auth.js"


function Register(){

    const [username, setUsername] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            const result = await register(email, username, password);
            console.log(result);
        } catch(error){
            console.log(error);
        }
    }
    
    return(
        <div>
            <div>
                Register
            </div>
            <div>
                User Name
            </div>
            <input
                value = {username}
                onChange = {saveInputUsername}
            />
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
                onClick = {registerButton}
            > Register </button>
        </div>

    );
}
export default Register;