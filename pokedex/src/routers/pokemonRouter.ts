import { createTRPCRouter, publicProcedure } from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const pokemonRouter = createTRPCRouter({
  getPokemon: publicProcedure
    .input(z.string()) // Expecting a single Pokemon name as input
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });
      return pokemon;
    }),

  getPokemonArray: publicProcedure
    .input(z.array(z.string())) // Expecting an array of Pokemon names
    .query(async ({ input }) => {
      const pokemonArray = await prisma.pokemon.findMany({
        where: {
          name: { in: input },
        },
      });
      return pokemonArray;
    }),
});
