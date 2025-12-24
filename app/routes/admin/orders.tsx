import AdminLayout from "~/layouts/AdminLayout";

export default function AdminOrders() {
  const orders = [
    { id: 101, customer: "John Doe", total: 99.99, status: "Pending" },
    { id: 102, customer: "Jane Smith", total: 49.5, status: "Shipped" },
  ];

  return (
    <AdminLayout>
      <h1>Orders</h1>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc" }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Customer</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Total</th>
            <th style={{ borderBottom: "1px solid #ccc" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>${o.total}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
