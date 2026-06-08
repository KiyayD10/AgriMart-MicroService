import { useState } from "react";
import { useRouter } from "next/router";
import { adminAccount } from "../data/users";

/*
  --------------------
  Login Page (CMS)
  --------------------
  Fungsi:
  - Login admin CMS (dummy auth)
  - Redirect ke dashboard product jika sukses
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

    if (
      email === adminAccount.email &&
      password === adminAccount.password
    ) {
      router.push("/product");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h1 style={{ marginBottom: "10px" }}>CMS Login</h1>

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
  Styling CMS Login (FIXED)
*/
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial",
    backgroundColor: "#111", // 🔥 gelap biar fokus ke form
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "12px",
    padding: "25px",
    borderRadius: "10px",
    backgroundColor: "#fff", // 🔥 card putih
    width: "320px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
  },
  button: {
    padding: "10px",
    backgroundColor: "#000",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
  },
};