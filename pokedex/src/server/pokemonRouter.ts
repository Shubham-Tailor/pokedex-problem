import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const t = initTRPC.create();

export const pokemonRouter = t.router({
  getPokemon: t.procedure
    .input(z.string()) // Expecting a single Pokémon name as input
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });

      if (!pokemon) {
        throw new Error("Pokémon not found");
      }

      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        sprite: pokemon.sprite,
      };
    }),

    getPokemonArray: t.procedure
    .input(z.array(z.string())) // Expecting an array of Pokémon names
    .query(async ({ input }) => {
      const pokemonArray = await prisma.pokemon.findMany({
        where: {
          name: { in: input },
        },
      });

      return pokemonArray.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        sprite: pokemon.sprite,
      }));
    }),

    getPokemonByType: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemonArray = await prisma.pokemon.findMany({
        where: {
          types: {
            has: input, // Assuming 'types' is an array of strings
          },
        },
      });

      return pokemonArray.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        sprite: pokemon.sprite,
      }));
    }),
});
