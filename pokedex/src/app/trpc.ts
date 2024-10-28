import { initTRPC } from '@trpc/server';
import { pokemonRouter } from './routers/pokemonRouter';

const t = initTRPC.create();

export const appRouter = t.router({
  pokemon: pokemonRouter,
});

export type AppRouter = typeof appRouter;
