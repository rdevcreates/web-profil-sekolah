'use client';

import { User, Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminHeader() {
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "People", href: "/admin/people" },
    { label: "Hiring", href: "/admin/hiring" },
    { label: "Devices", href: "/admin/devices" },
    { label: "Apps", href: "/admin/apps" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <span className="text-2xl font-extrabold text-gray-800">RdevCreates</span>

        {/* Nav + Action */}
        <div className="flex items-center gap-4">
          {/* Nav Tabs */}
          <nav className="hidden md:flex items-center gap-2 bg-gray-100 p-1 rounded-full">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
                    ${isActive ? "bg-white text-black shadow-sm" : "text-gray-600 hover:bg-white hover:text-black"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Notif Button */}
          <button className="relative bg-gray-100 p-2 rounded-full hover:bg-white transition">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
          </button>

          {/* User Button */}
          <button className="bg-gray-100 hover:bg-white p-2 rounded-full transition">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
