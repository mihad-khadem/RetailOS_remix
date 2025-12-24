export default function Footer() {
  return (
    <>
      <footer
        style={{
          padding: "1rem",
          borderTop: "1px solid #e5e7eb",
          marginTop: "2rem",
          textAlign: "center",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} RetailOS Store. All rights reserved.
        </p>
      </footer>
    </>
  );
}
