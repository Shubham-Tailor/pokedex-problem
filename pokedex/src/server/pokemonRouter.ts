import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';
import { procedure, router } from '../server/trpc';

const prisma = new PrismaClient();
const t = initTRPC.create();

export const pokemonRouter = router({
  getPokemon: procedure
    .input(z.string()) // Expecting a single Pokemon name as input
    .query(async ({ input, ctx }) => {
      console.log('Input received:', input);
      const pokemon = await ctx.prisma.pokemon.findUnique({
        where: { name: input },
      });
      console.log('Returned Pokemon:', pokemon);
      return pokemon;
    }),

  // getPokemonArray: t.procedure
  //   .input(z.array(z.string())) // Expecting an array of Pokemon names
  //   .query(async ({ input }) => {
  //     console.log('Input received:', input);
  //     const pokemonArray = await prisma.pokemon.findMany({
  //       where: {
  //         name: { in: input },
  //       },
  //     });
  //     return pokemonArray;
  //   }),
});
