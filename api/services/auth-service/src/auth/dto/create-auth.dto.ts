import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

// DTO untuk validasi request body saat register
export class CreateAuthDto {
  @IsString()
  @MinLength(3, { message: 'Nama minimal 3 karakter' })
  @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
  nama!: string;

  @IsEmail({}, { message: 'Format email tidak valid' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'Password minimal 6 karakter' })
  password!: string;
}
