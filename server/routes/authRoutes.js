import { Router } from "express";
import { loginUser } from "../controllers/authController.js";
import { getCart } from "../controllers/cartController.js";
const router = Router();

// Login Endpoint
router.get("/", getCart);
router.post("/login", loginUser);

export default router;
