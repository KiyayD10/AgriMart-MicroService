import { IsEnum } from 'class-validator';
import { OrderStatus } from '../../generated/prisma/client';

// DTO untuk update status order
export class UpdateOrderDto {
  @IsEnum(OrderStatus, { message: 'Status tidak valid' })
  status!: OrderStatus;
}
