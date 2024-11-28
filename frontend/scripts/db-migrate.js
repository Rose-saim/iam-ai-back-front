import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';

const prisma = new PrismaClient();

async function main() {
  try {
    // Run migrations
    console.log('Running database migrations...');
    execSync('npx prisma migrate deploy', { stdio: 'inherit' });

    // Seed initial data if needed
    console.log('Seeding database...');
    await seedDatabase();

    console.log('Database setup completed successfully');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedDatabase() {
  // Add your seeding logic here
  const adminExists = await prisma.user.findFirst({
    where: { email: 'admin@iamai.com' }
  });

  if (!adminExists) {
    await prisma.user.create({
      data: {
        email: 'admin@iamai.com',
        passwordHash: 'hashed_password', // Remember to hash this
        role: 'admin'
      }
    });
  }
}

main();