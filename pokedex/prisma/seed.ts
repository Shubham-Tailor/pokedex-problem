import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      { name: 'Pikachu', types: ['electric'], sprite: 'https://pokemon.com/pictures/pikachu.png' },
      { name: 'Jigglypuff', types: ['normal', 'fairy'], sprite: 'https://pokemon.com/pictures/jigglypuff.png' },
      { name: 'Meowth', types: ['normal'], sprite: 'https://pokemon.com/pictures/meowth.png' },
      { name: 'Bulbasaur', types: ['grass', 'poison'], sprite: 'https://pokemon.com/pictures/bulbasaur.png' },
      { name: 'Charmander', types: ['fire'], sprite: 'https://pokemon.com/pictures/charmander.png' },
      { name: 'Squirtle', types: ['water'], sprite: 'https://pokemon.com/pictures/squirtle.png' },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });