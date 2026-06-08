import { useState } from "react";
import { products as initialProducts } from "../../data/products";

/*
  --------------------
  Product Page (CMS)
  --------------------
  Fungsi:
  - CREATE product (dummy)
  - READ product (table)
  - DELETE product
  - EDIT product (inline prompt)
*/

export default function ProductPage() {
  const [list, setList] = useState(initialProducts);

  /*
    CREATE product
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

  /*
    DELETE product
  */
  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  /*
    EDIT product (simple version pakai prompt)
  */
  const handleEdit = (id: number) => {
    const target = list.find((item) => item.id === id);
    if (!target) return;

    const newNama = prompt("Edit Nama:", target.nama);
    const newDeskripsi = prompt("Edit Deskripsi:", target.deskripsi);
    const newHarga = prompt("Edit Harga:", String(target.harga));
    const newStok = prompt("Edit Stok:", String(target.stok));

    setList(
      list.map((item) =>
        item.id === id
          ? {
              ...item,
              nama: newNama ?? item.nama,
              deskripsi: newDeskripsi ?? item.deskripsi,
              harga: Number(newHarga) || item.harga,
              stok: Number(newStok) || item.stok,
            }
          : item
      )
    );
  };

  return (
    <div>
      <h1>Product List</h1>

      {/* CREATE */}
      <button onClick={handleAdd} style={styles.button}>
        + Add Dummy Product
      </button>

      {/* TABLE */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Nama</th>
            <th style={styles.th}>Deskripsi</th>
            <th style={styles.th}>Harga</th>
            <th style={styles.th}>Stok</th>
            <th style={styles.th}>Action</th>
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

              <td style={styles.td}>
                {/* EDIT */}
                <button
                  onClick={() => handleEdit(item.id)}
                  style={styles.editBtn}
                >
                  Edit
                </button>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(item.id)}
                  style={styles.deleteBtn}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
  Styling CMS
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
  editBtn: {
    marginRight: "5px",
    padding: "5px 10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 10px",
    backgroundColor: "red",
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