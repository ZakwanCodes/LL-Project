import express from "express";
import "dotenv/config";
import {ConnectDB} from "./lib/db.js";


const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) =>{
    res.send("bye");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    ConnectDB();
});