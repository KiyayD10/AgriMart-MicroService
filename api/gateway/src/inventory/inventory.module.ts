import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';

@Module({
  imports: [HttpModule],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
