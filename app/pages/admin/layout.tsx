"use client";

import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      <AdminSidebar/>

      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-6 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
