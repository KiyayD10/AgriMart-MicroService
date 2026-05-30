import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from '../generated/prisma/client';

// Semua endpoint auth → /api/auth
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // POST /api/auth/register
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() createAuthDto: CreateAuthDto,
  ): Promise<Omit<User, 'password'>> {
    return this.authService.register(createAuthDto);
  }

  // POST /api/auth/login
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() body: { email: string; password: string },
  ): Promise<Omit<User, 'password'>> {
    return this.authService.login(body.email, body.password);
  }
}
