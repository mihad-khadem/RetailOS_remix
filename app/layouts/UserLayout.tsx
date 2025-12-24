import { Outlet } from "@remix-run/react";
import { ReactNode } from "react";
import Footer from "~/components/Footer";
import { Header } from "~/components/Header";

// User layout component
type UserLayoutProps = {
  children?: ReactNode;
};

export default function UserLayout({ children }: UserLayoutProps) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>{children}</main>
      <Footer />
    </>
  );
}
