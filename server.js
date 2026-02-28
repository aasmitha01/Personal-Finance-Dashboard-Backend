import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";
import alertRoutes from "./routes/alert.routes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ROOT TEST ROUTE
app.get("/", (req, res) => {
  res.send("Finance API Running");
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/alerts", alertRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});