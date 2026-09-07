import "dotenv/config";
import express from "express";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";

// Prisma 7 needs a driver adapter to actually reach PostgreSQL.
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ success: true, message: "Server is running" });
});

const port = Number(process.env.PORT) || 5000;

async function startServer() {
  try {
    // Connection test: this really contacts Neon.
    await prisma.$connect();
    console.log("Database connected successfully (Neon PostgreSQL)");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

startServer();
