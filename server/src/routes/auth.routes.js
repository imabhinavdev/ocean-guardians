import { authMiddleware } from "easy-jwt-auth";
import { Login, SignUp } from "../controllers/auth.controllers.js";
import { Router } from "express";

const router = Router();


router.post("/login", Login);
router.post("/signup", SignUp);
router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
});


export default router;
