import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  private readonly baseUrl = process.env['AUTH_SERVICE_URL'];

  constructor(private readonly httpService: HttpService) {}

  async register(data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/auth/register`, data),
    );
    return response.data;
  }

  async login(data: unknown): Promise<unknown> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/auth/login`, data),
    );
    return response.data;
  }
}
