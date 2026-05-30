// Representasi model User sesuai schema Prisma
export class Auth {
  id!: number;
  nama!: string;
  email!: string;
  password!: string;
  role!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
