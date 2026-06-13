import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  async findAll(): Promise<unknown> {
    return this.inventoryService.findAll();
  }

  @Get(':productId')
  async findOne(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<unknown> {
    return this.inventoryService.findOne(productId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() data: unknown): Promise<unknown> {
    return this.inventoryService.create(data);
  }

  @Patch(':productId')
  async adjustStock(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() data: unknown,
  ): Promise<unknown> {
    return this.inventoryService.adjustStock(productId, data);
  }

  @Get(':productId/logs')
  async findLogs(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<unknown> {
    return this.inventoryService.findLogs(productId);
  }
}
