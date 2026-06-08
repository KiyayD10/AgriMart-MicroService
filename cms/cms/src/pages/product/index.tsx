import { products } from "../../data/products";

/*
  --------------------
  -Product Page (CMS)-
  --------------------
  Fungsi:
  - Menampilkan daftar produk dalam bentuk tabel
  - Menggunakan dummy data sebelum connect ke backend
*/

export default function ProductPage() {
  return (
    <div>
      <h1>Product List</h1>

      {/*
        Tabel sederhana untuk menampilkan data produk
        Ini versi awal CMS (tanpa API)
      */}
      <table border={1} cellPadding={10} style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Stok</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.deskripsi}</td>
              <td>{item.harga}</td>
              <td>{item.stok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}