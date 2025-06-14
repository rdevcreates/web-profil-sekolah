'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Users", href: "/admin/users", icon: <Users size={20} /> },
    { label: "Articles", href: "/admin/articles", icon: <FileText size={20} /> },
    { label: "Settings", href: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-72 h-screen bg-white/70 backdrop-blur-md shadow-xl border-r border-blue-100 hidden md:flex flex-col px-6 py-8">
      <div className="text-2xl font-extrabold text-blue-700 tracking-wide mb-10">
        Admin Panel
      </div>

      <ul className="space-y-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group 
                ${isActive
                  ? "bg-blue-100 text-blue-700 font-semibold shadow-inner"
                  : "hover:bg-blue-50 text-gray-700 hover:shadow-md"
                }`}
              >
                <div className={`transition-transform duration-300 group-hover:scale-110`}>
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto pt-10 text-xs text-gray-400">
        © 2025 SekolahKita
      </div>
    </aside>
  );
}
