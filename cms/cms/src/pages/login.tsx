import { useState } from "react";
import { useRouter } from "next/router";
import { adminAccount } from "../data/auth";

/*
  --------------------
  Login Page (CMS)
  --------------------
  Fungsi:
  - Login admin CMS
  - Menggunakan dummy auth (belum backend)
  - Akan diganti ke /auth/login dari backend nanti
*/

export default function LoginPage() {
  const router = useRouter();

  // state input form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*
    Handle login dummy
  */
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // cek dummy account
    if (
      email === adminAccount.email &&
      password === adminAccount.password
    ) {
      // login sukses → masuk CMS product
      router.push("/product");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h1>CMS Login</h1>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {/* BUTTON */}
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

/*
  Styling login CMS sederhana
*/
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    backgroundColor: "#f5f5f5",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "white",
    width: "300px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};