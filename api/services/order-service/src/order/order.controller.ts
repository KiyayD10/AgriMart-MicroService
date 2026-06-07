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
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderItem } from '../generated/prisma/client';

// Tipe return untuk order beserta itemnya
type OrderWithItems = Order & { items: OrderItem[] };

// Semua route /api/order
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  // POST /api/order
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<OrderWithItems> {
    return this.orderService.create(createOrderDto);
  }

  // GET /api/order
  @Get()
  async findAll(): Promise<OrderWithItems[]> {
    return this.orderService.findAll();
  }

  // GET /api/order/:id
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<OrderWithItems> {
    return this.orderService.findOne(id);
  }

  // PATCH /api/order/:id
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<OrderWithItems> {
    return this.orderService.update(id, updateOrderDto);
  }

  // DELETE /api/order/:id
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id', ParseIntPipe) id: number): Promise<OrderWithItems> {
    return this.orderService.remove(id);
  }
}
