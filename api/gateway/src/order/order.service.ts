import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrderService {
  private readonly baseUrl = process.env['ORDER_SERVICE_URL'];

  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/order`),
    );
    return response.data;
  }

  async findOne(id: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/order/${id}`),
    );
    return response.data;
  }

  async create(data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/order`, data),
    );
    return response.data;
  }

  async update(id: number, data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.patch(`${this.baseUrl}/order/${id}`, data),
    );
    return response.data;
  }

  async remove(id: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.delete(`${this.baseUrl}/order/${id}`),
    );
    return response.data;
  }
}
