import Link from "next/link";

/*
  -------------------
  -Sidebar Component-
  -------------------
  Fungsi:
  - Menampilkan menu navigasi di sisi kiri CMS
  - Digunakan untuk pindah antar halaman admin (Product, Kategori, Login)
*/

export default function Sidebar() {
    return (
        <div style={styles.sidebar}>
            {/*
        Judul aplikasi CMS
      */}
            <h2 style={styles.title}>CMS AgriMart</h2>

            {/*
        Navigation Menu
        - Menggunakan Next.js Link agar navigasi tidak reload page
        - Konsep SPA (Single Page Application behavior)
      */}
            <nav style={styles.nav}>
                {/*
          Menu ke halaman Product
          Digunakan untuk mengelola data produk (CRUD)
        */}
                <Link href="/product" style={styles.link}>
                    Product
                </Link>

                {/*
          Menu ke halaman Kategori
          Digunakan untuk mengelola kategori produk
        */}
                <Link href="/kategori" style={styles.link}>
                    Kategori
                </Link>

                {/*
          Menu Login
          Biasanya dipakai untuk autentikasi admin CMS
        */}
                <Link href="/login" style={styles.link}>
                    Login
                </Link>
            </nav>
        </div>
    );
}

/*
  CSS Styling
*/
const styles = {
    sidebar: {
        width: "200px", // lebar sidebar
        height: "100vh", // full tinggi layar
        background: "#111",
        color: "#fff",
        padding: "20px",
        position: "fixed" as const, // tetap di kiri ketika scroll
    },
    title: {
        marginBottom: "20px",
    },
    nav: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "10px", // jarak antar menu
    },
    link: {
        color: "white",
        textDecoration: "none",
    },
};