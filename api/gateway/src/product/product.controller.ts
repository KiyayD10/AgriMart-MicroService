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
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<unknown> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return this.productService.findOne(id);
  }

  @Post()
  async create(@Body() data: unknown): Promise<unknown> {
    return this.productService.create(data);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: unknown,
  ): Promise<unknown> {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<unknown> {
    return this.productService.remove(id);
  }
}
