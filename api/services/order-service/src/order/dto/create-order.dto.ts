import {
  IsInt,
  IsArray,
  ArrayMinSize,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

// DTO untuk validasi item yang dibeli
export class CreateOrderItemDto {
  @IsInt({ message: 'Product ID harus berupa angka' })
  productId!: number;

  @IsInt({ message: 'Jumlah harus berupa angka' })
  @Min(1, { message: 'Jumlah minimal 1' })
  jumlah!: number;

  @IsInt({ message: 'Harga harus berupa angka' })
  @Min(0, { message: 'Harga tidak boleh negatif' })
  harga!: number;
}

// DTO untuk validasi request body saat create order
export class CreateOrderDto {
  @IsInt({ message: 'User ID harus berupa angka' })
  userId!: number;

  @IsArray({ message: 'Items harus berupa array' })
  @ArrayMinSize(1, { message: 'Order minimal memiliki 1 item' })
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items!: CreateOrderItemDto[];
}
