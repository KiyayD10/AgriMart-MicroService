import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ProductService {
  private readonly baseUrl = process.env['PRODUCT_SERVICE_URL'];

  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/product`),
    );
    return response.data;
  }

  async findOne(id: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/product/${id}`),
    );
    return response.data;
  }

  async create(data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/product`, data),
    );
    return response.data;
  }

  async update(id: number, data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.patch(`${this.baseUrl}/product/${id}`, data),
    );
    return response.data;
  }

  async remove(id: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.delete(`${this.baseUrl}/product/${id}`),
    );
    return response.data;
  }
}
