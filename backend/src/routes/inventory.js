import express from "express"
import protectedRoute from "../middleware/auth.middleware.js";
import {getInventory, addToInventory, removeOne, removeAll} from "../controller/inventory.controller.js"


const router = express.Router();

router.get("/", protectedRoute, getInventory);
router.post("/", protectedRoute, addToInventory);           
router.patch("/:loomianId", protectedRoute, removeOne);   
router.delete("/:loomianId", protectedRoute, removeAll); 


export default router;