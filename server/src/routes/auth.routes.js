import { Login, SignUp } from "../controllers/auth.controllers.js";
import { Router } from "express";
import { signout } from "easy-jwt-auth";

const router = Router();

router.post("/login", Login);
router.post("/signup", SignUp);
router.post("/logout", signout)

export default router;
