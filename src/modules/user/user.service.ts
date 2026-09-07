import { prisma } from "../../lib/prisma";

// All database work lives in the service layer.
// Controllers should never talk to Prisma directly.

const createUser = async (payload: { name: string; email: string }) => {
  return prisma.user.create({ data: payload });
};

const getAllUsers = async () => {
  return prisma.user.findMany({
    include: { posts: true },
    orderBy: { createdAt: "desc" },
  });
};

const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    include: { posts: true },
  });
};

export const UserService = {
  createUser,
  getAllUsers,
  getUserById,
};
