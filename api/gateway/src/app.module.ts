import { Module } from '@nestjs/common';
import { KategoriModule } from './kategori/kategori.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { InventoryModule } from './inventory/inventory.module';

@Module({
  imports: [
    KategoriModule,
    ProductModule,
    AuthModule,
    OrderModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
