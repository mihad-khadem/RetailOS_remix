import { Link } from "@remix-run/react";

export function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #e5e7eb" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
