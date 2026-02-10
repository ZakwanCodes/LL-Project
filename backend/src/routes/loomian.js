import express from "express"

import {getAllLoomians, getLoomianById} from "../controller/loomian.controller.js"

const router = express.Router();

router.get("/", getAllLoomians);

router.get("/:id", getLoomianById);


export default router;