import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
} from '@nestjs/common';
import { KategoriService } from './kategori.service';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { Kategori } from './entities/kategori.entity';

// Semua endpoint kategori
@Controller('kategori')
export class KategoriController {
  constructor(private readonly kategoriService: KategoriService) {}

  // Tambah kategori baru
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createKategoriDto: CreateKategoriDto,
  ): Promise<Kategori> {
    return this.kategoriService.create(createKategoriDto);
  }

  // Ambil semua kategori
  @Get()
  async findAll(): Promise<Kategori[]> {
    return this.kategoriService.findAll();
  }

  // Ambil kategori berdasarkan id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Kategori> {
    return this.kategoriService.findOne(id);
  }

  // Update kategori berdasarkan id
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateKategoriDto: UpdateKategoriDto,
  ): Promise<Kategori> {
    return this.kategoriService.update(id, updateKategoriDto);
  }

  // Hapus kategori berdasarkan id
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Kategori> {
    return this.kategoriService.remove(id);
  }
}
