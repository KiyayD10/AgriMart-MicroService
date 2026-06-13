import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { KategoriService } from './kategori.service';

// Route api/kategori (di-forward ke kategori-service)
@Controller('kategori')
export class KategoriController {
  constructor(private readonly kategoriService: KategoriService) {}

  @Get()
  async findAll(): Promise<unknown> {
    return this.kategoriService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return this.kategoriService.findOne(id);
  }

  @Post()
  async create(@Body() data: unknown): Promise<unknown> {
    return this.kategoriService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: unknown,
  ): Promise<unknown> {
    return this.kategoriService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return this.kategoriService.remove(id);
  }
}
