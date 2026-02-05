import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import AuthRoutes from "./routes/auth.js"
import LoomianRoutes from "./routes/loomian.js"
import {ConnectDB} from "./lib/db.js"


const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", AuthRoutes);
app.use("/api/loomian", LoomianRoutes);



app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running on port ${PORT}`);
    
});