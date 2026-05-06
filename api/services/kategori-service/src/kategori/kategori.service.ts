import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKategoriDto } from './dto/create-kategori.dto';
import { UpdateKategoriDto } from './dto/update-kategori.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Kategori } from '../generated/prisma/client';

@Injectable()
export class KategoriService {
  // Buat koneksi ke Prisma
  constructor(private readonly prisma: PrismaService) {}

  // Tambah kategori baru
  async create(createKategoriDto: CreateKategoriDto): Promise<Kategori> {
    return this.prisma.kategori.create({
      data: createKategoriDto,
    });
  }

  // Ambil semua data kategori
  async findAll(): Promise<Kategori[]> {
    return this.prisma.kategori.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  // Ambil kategori berdasarkan id
  async findOne(id: number): Promise<Kategori> {
    const Kategori = await this.prisma.kategori.findUnique({
      where: { id },
    });

    // Kalau data gak ada lempar error 404
    if (!Kategori) {
      throw new NotFoundException(`Kategori dengan id ${id} tidak ditemukan`);
    }

    return Kategori;
  }

  // Update kategori berdasarkan id
  async update(
    id: number,
    updateKategoriDto: UpdateKategoriDto,
  ): Promise<Kategori> {
    // Cek data apakah ada atau tidak
    await this.findOne(id);

    return this.prisma.kategori.update({
      where: { id },
      data: updateKategoriDto,
    });
  }

  // Hapus kategori berdasarkan id
  async remove(id: number): Promise<Kategori> {
    // Cek data apakah ada atau tidak
    await this.findOne(id);

    return this.prisma.kategori.delete({
      where: { id },
    });
  }
}
