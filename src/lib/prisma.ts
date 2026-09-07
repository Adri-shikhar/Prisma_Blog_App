// In Prisma 7 the client is generated into your own project folder,
// so we import it from ../generated/prisma/client — NOT from "@prisma/client".
import { PrismaClient } from "../generated/prisma/client";

// One single client for the whole app.
// Creating a new PrismaClient in every file opens too many database
// connections and will eventually be refused by Neon.
export const prisma = new PrismaClient();
