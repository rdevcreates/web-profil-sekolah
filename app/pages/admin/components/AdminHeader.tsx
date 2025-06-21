'use client';

import { usePathname } from 'next/navigation';
import HeaderButton from './HeaderButton';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'User', href: '/admin/people' },
  { label: 'Laporan', href: '/admin/report' },
  { label: 'Pengaturan', href: '/admin/settings' },
];

export default function AdminHeader() {
  const pathname = usePathname();
  const currentItem = navItems.find((item) => pathname.startsWith(item.href));

  
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="flex justify-between items-center px-6 py-3">
        <div className="text-gray-800 text-lg font-semibold">
          {currentItem?.label || 'Admin'}
        </div>

        <HeaderButton/>
        
      </div>
    </header>
  );
}
