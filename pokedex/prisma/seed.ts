import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      { name: 'Pikachu', types: ['electric'], sprite: 'https://pokemon.com/pictures/pikachu.png' },
      { name: 'Jigglypuff', types: ['normal', 'fairy'], sprite: 'https://pokemon.com/pictures/jigglypuff.png' },
      { name: 'Meowth', types: ['normal'], sprite: 'https://pokemon.com/pictures/meowth.png' },
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