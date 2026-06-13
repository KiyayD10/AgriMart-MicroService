import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

// Bootstrap gateway
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Prefix global semua route api/...
  app.setGlobalPrefix('api');

  // Validasi otomatis semua request body
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Port 3000 untuk api-gateway
  await app.listen(3000);
}

void bootstrap();
