import { useState } from "react";
import { categories as initialCategories } from "../../data/categories";

/*
  --------------------
  Kategori Page (CMS)
  --------------------
  Fungsi:
  - Menampilkan daftar kategori
  - CRUD dummy (frontend only)
*/

export default function KategoriPage() {
  const [list, setList] = useState(initialCategories);

  // CREATE
  const handleAdd = () => {
    const newItem = {
      id: list.length + 1,
      nama: "Kategori Baru",
      deskripsi: "Auto dummy kategori",
    };

    setList([...list, newItem]);
  };

  // DELETE
  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Kategori List</h1>

      <button onClick={handleAdd} style={styles.button}>
        + Add Dummy Kategori
      </button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Nama</th>
            <th style={styles.th}>Deskripsi</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td style={styles.td}>{item.id}</td>
              <td style={styles.td}>{item.nama}</td>
              <td style={styles.td}>{item.deskripsi}</td>
              <td style={styles.td}>
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