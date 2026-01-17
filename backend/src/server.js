import express from "express"
import cookieParser from "cookie-parser"
import "dotenv/config"
import router from "./routes/auth.js"
import {ConnectDB} from "./lib/db.js"

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(cookieParser());


app.use("/auth", router);



app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running on port ${PORT}`);
    
});