import { ReactNode } from "react";
import { AdminSidebar } from "~/components/AdminSidebar";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: "2rem" }}>{children}</main>
    </div>
  );
}
