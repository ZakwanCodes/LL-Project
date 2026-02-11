import express from "express"
import protectedRoute from "../middleware/auth.middleware.js";
import {addToInventory, removeOne, removeAll} from "../controller/inventory.controller.js"


const router = express.Router();

router.post("/", protectedRoute, addToInventory);           
router.patch("/:loomianId", protectedRoute, removeOne);   
router.delete("/:loomianId", protectedRoute, removeAll); 


export default router;