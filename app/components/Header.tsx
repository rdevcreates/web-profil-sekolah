'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

type MenuItem =
  | { label: string; href: string; type: "link" }
  | {
      label: string;
      type: "dropdown";
      items: { label: string; href: string }[];
    };

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (items: { label: string; href: string }[]) =>
    items.some((item) => pathname === item.href);

  const menuItems: MenuItem[] = [
    { label: "Dashboard", href: "/", type: "link" },
    {
      label: "Media",
      type: "dropdown",
      items: [
        { label: "Foto", href: "/pages/media/photos" },
        { label: "Video", href: "/pages/media/videos" },
      ],
    },
    {
      label: "Profil",
      type: "dropdown",
      items: [
        { label: "Struktur Organisasi", href: "/pages/profile/organizational" },
        { label: "Data Guru", href: "/pages/profile/teacher" },
        { label: "Data Staf", href: "/pages/profile/staff" },
        { label: "Fasilitas", href: "/pages/facility" },
        { label: "Ekstrakurikuler", href: "/pages/profile/extracurricular" },
      ],
    },
    { label: "Artikel", href: "/pages/article", type: "link" },
    { label: "Pengumuman", href: "/pages/announcement", type: "link" },
    { label: "Kontak", href: "/pages/contact", type: "link" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-xl font-extrabold text-gray-800">SEKOLAHKU</div>

        {/* Menu Nav */}
        <nav className="hidden md:flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
          {menuItems.map((item, index) => {
            if (item.type === "link") {
              const active = isActive(item.href);
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-white text-black shadow-sm"
                      : "text-gray-600 hover:bg-white hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            if (item.type === "dropdown") {
              return (
                <DropdownMenu
                  key={index}
                  label={item.label}
                  isActive={isDropdownActive(item.items)}
                  items={item.items}
                />
              );
            }

            return null;
          })}
        </nav>

        {/* Login button */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/pages/auth/login">
            <button className="bg-gray-100 hover:bg-gray-200 text-sm px-4 py-1.5 rounded-full transition font-medium">
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
