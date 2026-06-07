import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Bootstrap order-service
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Prefix global semua route → /api/...
  app.setGlobalPrefix('api');

  // Validasi otomatis semua request body
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Port 3004 untuk order-service
  await app.listen(3004);
}
void bootstrap();
