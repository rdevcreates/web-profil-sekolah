import AdminHeader from "./components/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-yellow-50">
      <AdminHeader />
      <main className="p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
