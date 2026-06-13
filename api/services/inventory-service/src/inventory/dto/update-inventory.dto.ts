import { IsInt, IsEnum, IsOptional, IsString, Min } from 'class-validator';
import { StockLogType } from '../../generated/prisma/client';

// DTO untuk menambah atau mengurangi stok
export class UpdateInventoryDto {
  @IsInt({ message: 'Quantity harus berupa angka' })
  @Min(1, { message: 'Quantity minimal 1' })
  quantity!: number;

  @IsEnum(StockLogType, { message: 'Type harus IN atau OUT' })
  type!: StockLogType;

  @IsOptional()
  @IsString()
  note?: string;
}
