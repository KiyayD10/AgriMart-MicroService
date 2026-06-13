import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class InventoryService {
  private readonly baseUrl = process.env['INVENTORY_SERVICE_URL'];

  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/inventory`),
    );
    return response.data;
  }

  async findOne(productId: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/inventory/${productId}`),
    );
    return response.data;
  }

  async create(data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/inventory`, data),
    );
    return response.data;
  }

  async adjustStock(productId: number, data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.patch(`${this.baseUrl}/inventory/${productId}`, data),
    );
    return response.data;
  }

  async findLogs(productId: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/inventory/${productId}/logs`),
    );
    return response.data;
  }
}
