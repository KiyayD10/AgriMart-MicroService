import { Module } from '@nestjs/common';
import { KategoriModule } from './kategori/kategori.module';

@Module({
  imports: [KategoriModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
