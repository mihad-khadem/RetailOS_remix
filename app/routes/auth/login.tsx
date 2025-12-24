import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
    >
      <div
        style={{
          width: "400px",
          padding: "2rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
        }}
      >
        <h1>Login</h1>
        <form>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", marginBottom: "1rem" }}
          />
          <button type="submit" style={{ width: "100%" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
