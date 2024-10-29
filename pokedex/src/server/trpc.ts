import { initTRPC } from '@trpc/server';
import { pokemonRouter } from './pokemonRouter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const t = initTRPC.context().create();

export const createContext = () => ({ prisma });

export const router = t.router; // This is the main router function
export const procedure = t.procedure;

export const appRouter = t.router({
  pokemon: pokemonRouter, // Register the pokemon router here
});

export type AppRouter = typeof appRouter;

// import { initTRPC, inferAsyncReturnType } from '@trpc/server';
// import { PrismaClient } from '@prisma/client';
// import { createTRPCReact } from '@trpc/react-query';
// import type { AppRouter } from '../server/routers/_app';

// // Initialize Prisma Client
// const prisma = new PrismaClient();

// // Create a context function that returns the Prisma client
// const createContext = () => {
//   return { prisma };
// };

// // Define the type of context for TypeScript
// type Context = inferAsyncReturnType<typeof createContext>;

// const t = initTRPC.context<Context>().create(); // Use the defined context type

// export const procedure = t.procedure;
// export const router = t.router;

// export default createContext; // Export context if needed elsewhere
// export const trpc = createTRPCReact<AppRouter>();