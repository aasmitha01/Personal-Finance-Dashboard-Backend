import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";

import {
  getTransactions,
  addTransaction,
  deleteTransaction,
  updateTransaction
} from "../controllers/transaction.controller.js";

const router = express.Router();

router.get("/", authMiddleware, getTransactions);
router.post("/", authMiddleware, addTransaction);
router.delete("/:id", authMiddleware, deleteTransaction);
router.put("/:id", authMiddleware, updateTransaction);

export default router;