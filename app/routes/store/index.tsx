import UserLayout from "~/layouts/UserLayout";
//_store/_index.tsx
export default function StoreHome() {
  return (
    <>
      <UserLayout>
        <h1>Welcome to the Store!</h1>
        <p>This is the main store page.</p>
      </UserLayout>
    </>
  );
}
