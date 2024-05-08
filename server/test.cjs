// insertUsers.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function insertRandomUsers() {
  const randomEmail1 = `user1-${Math.random().toString(36).substring(2, 7)}@example.com`;
  const randomEmail2 = `user2-${Math.random().toString(36).substring(2, 7)}@example.com`;

  const user1 = await prisma.user.create({
    data: {
      email: randomEmail1,
      password: 'password123',
      name: 'John Doe',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: randomEmail2,
      password: 'password456',
      name: 'Jane Doe',
    },
  });

  console.log(`Created users:`, user1, user2);
}

insertRandomUsers()
  .catch(error => {
    console.error('Error inserting users:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
