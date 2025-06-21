'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', href: '/admin/pages/dashboard', icon: LayoutDashboard },
  { label: 'User', href: '/admin/people', icon: Users },
  { label: 'Laporan', href: '/admin/report', icon: FileText },
  { label: 'Pengaturan', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`h-screen bg-white shadow-sm border-r border-gray-200 transition-all duration-300 ease-in-out
        ${collapsed ? 'w-[72px]' : 'w-64'} hidden md:flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
        {!collapsed && (
          <span className="text-lg font-semibold text-gray-800 tracking-tight">
            RdevCreates
          </span>
        )}
        <button
          className="rounded-md p-1.5 hover:bg-gray-100 transition"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 font-medium
                ${
                  isActive
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'text-gray-600 hover:bg-gray-100'
                } ${collapsed ? 'justify-center' : ''}`}
              title={collapsed ? item.label : ''}
            >
              <Icon size={20} />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
        {!collapsed && <span>© 2025</span>}
      </div>
    </aside>
  );
}
