import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { KategoriService } from './kategori.service';
import { KategoriController } from './kategori.controller';

@Module({
  imports: [HttpModule],
  controllers: [KategoriController],
  providers: [KategoriService],
})
export class KategoriModule {}
