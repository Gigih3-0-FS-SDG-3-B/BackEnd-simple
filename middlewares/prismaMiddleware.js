import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

// Middleware to connect and disconnect the Prisma client
export const prismaMiddleware = (req, res, next) => {
  req.prisma = prisma;
  next();
};

// Middleware to connect and disconnect the Prisma client for functions
export const withPrisma = async (fn) => {
  try {
    const result = await fn(prisma);
    return result;
  } finally {
    await prisma.$disconnect();
  }
};