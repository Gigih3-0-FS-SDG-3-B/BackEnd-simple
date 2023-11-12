import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
    {
      emit: 'stdout',
      level: 'error',
    },
    {
      emit: 'stdout',
      level: 'info',
    },
    {
      emit: 'stdout',
      level: 'warn',
    },
  ],
})

if(process.env.NODE_ENV === 'development') {
  prisma.$on('query', (e) => {
    console.log(e.query)
    console.log(e.params)
  })
}

// Middleware to connect and disconnect the Prisma client for functions
export const withPrisma = async (fn) => {
  try {
    const result = await fn(prisma);
    return result;
  } finally {
    await prisma.$disconnect();
  }
};