import { PrismaClient } from '@prisma/client';

// This approach prevents multiple PrismaClient instances during hot reloads in development
// and allows for sharing a single instance in production

// Declare global variable to maintain prisma instance across hot reloads
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a singleton PrismaClient instance
export const prisma = global.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Assign the PrismaClient instance to the global object in non-production environments
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}