import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';

// Root module inventory-service
@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
