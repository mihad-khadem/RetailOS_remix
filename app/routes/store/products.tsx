import UserLayout from "../../layouts/UserLayout";

export default function Products() {
  const products = [
    { id: 1, name: "Red T-shirt", price: 25 },
    { id: 2, name: "Blue Jeans", price: 50 },
    { id: 3, name: "Sneakers", price: 75 },
  ];

  return (
    <UserLayout>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #e5e7eb",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
          >
            <h2>{p.name}</h2>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </UserLayout>
  );
}
