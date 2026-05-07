import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';

// Root module product-service
@Module({
  imports: [PrismaModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
