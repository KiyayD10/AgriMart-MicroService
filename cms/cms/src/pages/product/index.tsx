import { useState } from "react";
import { products as initialProducts } from "../../data/products";

/*
  --------------------
  Product Page (CMS)
  --------------------
  Fungsi:
  - Menampilkan daftar produk (dummy data)
  - Meniru tampilan admin panel sebelum connect ke backend API
  - Sekarang sudah support tambah data (simulasi CREATE)
*/

export default function ProductPage() {
  // state utama untuk list product (biar bisa berubah)
  const [list, setList] = useState(initialProducts);

  /*
    Fungsi untuk tambah dummy product
    - nanti di backend akan diganti POST API
  */
  const handleAdd = () => {
    const newItem = {
      id: list.length + 1,
      nama: "Produk Baru",
      deskripsi: "Auto dummy product",
      harga: 9999,
      stok: 10,
    };

    setList([...list, newItem]);
  };

  return (
    <div>
      <h1>Product List</h1>

      {/*
        Tombol tambah product (dummy)
        - simulasi CREATE data
        - nanti diganti request ke backend
      */}
      <button onClick={handleAdd} style={styles.button}>
        + Add Dummy Product
      </button>

      {/*
        Table CMS Style
        - borderCollapse agar garis tidak dobel
        - styling biar lebih clean seperti admin dashboard
      */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Nama</th>
            <th style={styles.th}>Deskripsi</th>
            <th style={styles.th}>Harga</th>
            <th style={styles.th}>Stok</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td style={styles.td}>{item.id}</td>
              <td style={styles.td}>{item.nama}</td>
              <td style={styles.td}>{item.deskripsi}</td>
              <td style={styles.td}>{item.harga}</td>
              <td style={styles.td}>{item.stok}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
  Styling sederhana untuk CMS table + button
*/
const styles = {
  button: {
    marginTop: "10px",
    marginBottom: "20px",
    padding: "8px 12px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontFamily: "Arial",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "left" as const,
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
};