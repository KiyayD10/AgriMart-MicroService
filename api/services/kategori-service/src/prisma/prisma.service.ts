import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';

// Service untuk jadi jembatan antara NestJS dan Prisma
// Extends PrismaClient supaya bisa di-inject ke service lain
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // Konek ke DB pas module pertama kali jalan
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  // Putus koneksi DB pas module di-destroy biar gak memory leak
  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
