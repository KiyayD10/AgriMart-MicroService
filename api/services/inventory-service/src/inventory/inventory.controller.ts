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
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory, StockLog } from '../generated/prisma/client';

// Semua route api/inventory
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // POST /api/inventory
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createInventoryDto: CreateInventoryDto,
  ): Promise<Inventory> {
    return this.inventoryService.create(createInventoryDto);
  }

  // GET /api/inventory
  @Get()
  async findAll(): Promise<Inventory[]> {
    return this.inventoryService.findAll();
  }

  // GET /api/inventory/:productId
  @Get(':productId')
  async findOne(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<Inventory> {
    return this.inventoryService.findOne(productId);
  }

  // PATCH /api/inventory/:productId tambah atau kurangi stok
  @Patch(':productId')
  async adjustStock(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ): Promise<Inventory> {
    return this.inventoryService.adjustStock(productId, updateInventoryDto);
  }

  // GET /api/inventory/:productId/logs riwayat perubahan stok
  @Get(':productId/logs')
  async findLogs(
    @Param('productId', ParseIntPipe) productId: number,
  ): Promise<StockLog[]> {
    return this.inventoryService.findLogs(productId);
  }
}
