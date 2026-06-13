import { IsInt, Min } from 'class-validator';

// DTO untuk membuat record inventory baru untuk sebuah product
export class CreateInventoryDto {
  @IsInt({ message: 'Product ID harus berupa angka' })
  productId!: number;

  @IsInt({ message: 'Stock harus berupa angka' })
  @Min(0, { message: 'Stock tidak boleh negatif' })
  stock!: number;
}
