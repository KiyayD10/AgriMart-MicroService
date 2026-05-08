// Model Product sesuai schema Prisma
export class Product {
  id: number;
  nama: string;
  deskripsi: string | null;
  harga: number;
  stok: number;
  kategoriId: number;
  createdAt: Date;
  updatedAt: Date;
}
