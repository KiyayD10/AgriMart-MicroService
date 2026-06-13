import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// Service untuk jadi jembatan antara NestJS dan Prisma
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Pakai adapter untuk koneksi prisma 7 ke PostgreSQL lokal
    const adapter = new PrismaPg({
      connectionString: process.env['DATABASE_URL'] as string,
    });
    super({ adapter });
  }

  // Konek ke DB pas module pertama kali jalan
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  // Putus koneksi DB pas module di-destroy biar gak memory leak
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
