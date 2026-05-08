import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Prefix global semua route/api
  app.setGlobalPrefix('api');

  // Validasi otomatis semua request body
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Port 3003 untuk auth-service
  await app.listen(3003);
}
void bootstrap();
