import express from "express"
import cookieParser from "cookie-parser"
import "dotenv/config"
import router from "./routes/auth.js"
import {ConnectDB} from "./lib/db.js"
import cors from "cors"

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", router);



app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running on port ${PORT}`);
    
});