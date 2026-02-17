import "dotenv/config"
import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import AuthRoutes from "./routes/auth.js"
import LoomianRoutes from "./routes/loomian.js"
import InventoryRoutes from "./routes/inventory.js"
import {ConnectDB} from "./lib/db.js"


const app = express();
//app.set("trust proxy", 1);
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
    origin : FRONTEND_URL,
    credentials : true,
}));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", AuthRoutes);
app.use("/api/loomian", LoomianRoutes);
app.use("/api/inventory", InventoryRoutes);



app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running on port ${PORT}`);
    
});