import AdminLayout from "~/layouts/AdminLayout";

export default function AdminProducts() {
  const products = [
    { id: 1, name: "Red T-shirt", stock: 20 },
    { id: 2, name: "Blue Jeans", stock: 15 },
  ];

  return (
    <AdminLayout>
      <h1>Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Stock: {p.stock}
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
}
