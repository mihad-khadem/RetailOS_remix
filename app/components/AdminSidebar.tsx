import { Link } from "@remix-run/react";

export function AdminSidebar() {
  return (
    <>
      <aside
        style={{
          width: "220px",
          minHeight: "100vh",
          color: "white",
          backgroundColor: "#111827",
          padding: "1rem",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>RetailOS - Admin Panel</h2>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/orders">Orders</Link>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/customers">Customers</Link>
          <Link to="/admin/reports">Reports</Link>
          <Link to="/admin/settings">Settings</Link>
        </nav>
      </aside>
    </>
  );
}
