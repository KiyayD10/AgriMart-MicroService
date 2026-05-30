import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { User } from '../generated/prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  // Inject PrismaService untuk akses database
  constructor(private readonly prisma: PrismaService) {}

  // Register user baru
  async register(
    createAuthDto: CreateAuthDto,
  ): Promise<Omit<User, 'password'>> {
    // Cek email sudah terdaftar atau belum
    const existing = await this.prisma.user.findUnique({
      where: { email: createAuthDto.email },
    });

    if (existing) {
      throw new ConflictException('Email sudah terdaftar');
    }

    // Enkripsi password sebelum disimpan
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);

    // Simpan user baru
    const user = await this.prisma.user.create({
      data: {
        ...createAuthDto,
        password: hashedPassword,
      },
    });

    // Hapus password dari response
    const { password: _password, ...result } = user;
    void _password;
    return result;
  }

  // Login user
  async login(
    email: string,
    password: string,
  ): Promise<Omit<User, 'password'>> {
    // Cek email terdaftar atau tidak
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('Email tidak ditemukan');
    }

    // Cek password cocok atau tidak
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new UnauthorizedException('Password salah');
    }

    // Hapus password dari response
    const { password: _password, ...result } = user;
    void _password;
    return result;
  }
}
