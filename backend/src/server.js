import express from "express";
import "dotenv/config";
import router from "./routes/auth.js"
import {ConnectDB} from "./lib/db.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/auth", router);






app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running on port ${PORT}`);
    
});