import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class KategoriService {
  // URL kategori-service diambil dari .env
  private readonly baseUrl = process.env['KATEGORI_SERVICE_URL'];

  constructor(private readonly httpService: HttpService) {}

  // Forward semua request ke kategori-service
  async findAll(): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/kategori`),
    );
    return response.data;
  }

  async findOne(id: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/kategori/${id}`),
    );
    return response.data;
  }

  async create(data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/kategori`, data),
    );
    return response.data;
  }

  async update(id: number, data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.patch(`${this.baseUrl}/kategori/${id}`, data),
    );
    return response.data;
  }

  async remove(id: number): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.delete(`${this.baseUrl}/kategori/${id}`),
    );
    return response.data;
  }
}
