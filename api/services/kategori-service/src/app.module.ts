import { Module } from '@nestjs/common';
import { KategoriModule } from './kategori/kategori.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [KategoriModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
