import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getAlerts } from "../controllers/alert.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getAlerts);

export default router;