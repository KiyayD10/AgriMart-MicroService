import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

// DTO untuk validasi request body saat create kategori
export class CreateKategoriDto {
  @IsString()
  @MinLength(3, { message: 'Nama minimal 3 karakter' })
  @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
  nama!: string;

  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Deskripsi maksimal 255 karakter' })
  deskripsi?: string;
}
