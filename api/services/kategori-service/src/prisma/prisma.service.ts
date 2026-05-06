import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

// Service untuk jadi jembatan antara NestJS dan Prisma
// Extends PrismaClient supaya bisa di-inject ke service lain
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // Prisma 7 wajib pakai adapter untuk koneksi ke PostgreSQL lokal
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
