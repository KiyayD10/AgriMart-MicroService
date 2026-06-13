import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { InventoryModule } from './inventory/inventory.module';

// Root module inventory-service
@Module({
  imports: [PrismaModule, InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
