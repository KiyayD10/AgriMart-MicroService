import {
  IsString,
  IsOptional,
  IsInt,
  Min,
  MinLength,
  MaxLength,
} from 'class-validator';

// DTO untuk validasi request body saat create product
export class CreateProductDto {
  @IsString()
  @MinLength(3, { message: 'Nama minimal 3 karakter' })
  @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
  nama!: string;

  @IsOptional()
  @IsString()
  @MaxLength(255, { message: 'Deskripsi maksimal 255 karakter' })
  deskripsi?: string;

  @IsInt({ message: 'Harga harus berupa angka' })
  @Min(0, { message: 'Harga tidak boleh negatif' })
  harga!: number;

  @IsInt({ message: 'Stok harus berupa angka' })
  @Min(0, { message: 'Stok tidak boleh negatif' })
  stok!: number;

  @IsInt({ message: 'Kategori ID harus berupa angka' })
  kategoriId!: number;
}
