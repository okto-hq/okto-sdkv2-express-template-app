import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import explorerRoutes from "./routes/explorerRoutes";
import intentRoutes from "./routes/intentRoutes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/explorer", explorerRoutes);
app.use("/api/intent", intentRoutes);

app.use(errorHandler); // Global error handler

export default app;
