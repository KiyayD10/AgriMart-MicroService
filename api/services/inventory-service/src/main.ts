import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// Bootstrap inventory-service
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Prefix global semua route /api/...
  app.setGlobalPrefix('api');

  // Validasi otomatis semua request body
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Port 3005 untuk inventory-service
  await app.listen(3005);
}

void bootstrap();
