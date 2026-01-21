import express from "express"
import {register, login, logout} from "../controller/auth.controller.js"
import protectedRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", protectedRoute, (req, res) => {
    res.send.json({success: true, user: req.user});
});


export default router;





