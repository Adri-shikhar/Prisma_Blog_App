import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./modules/user/user.route";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Prisma Blog App server is running",
  });
});

export default app;
