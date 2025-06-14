"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

// Tipe data menu
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

  const isDropdownActive = (items: { label: string; href: string }[]) => {
    return items.some((item) => pathname === item.href);
  };

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
        { label: "Fasilitas", href: "/pages/facility"},
        { label: "Ekstrakurikuler", href: "/pages/profile/extracurricular" },
      ],
    },
    { label: "Artikel", href: "/pages/article", type: "link" },
    { label: "Pengumuman", href: "/pages/announcement", type: "link" },
    { label: "Kontak", href: "/pages/contact", type: "link" },
  ];

  return (
    <header className="py-4 bg-white shadow-sm sticky top-0 z-50">
      <nav className="w-full flex items-center justify-between px-6 text-dark max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold text-blue-700 tracking-wide">
            SEKOLAHKU
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-x-6 items-center">
          {menuItems.map((item, index) => {
            if (item.type === "link") {
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={
                    isActive(item.href)
                      ? "font-bold text-blue-500"
                      : "text-gray-700 hover:text-blue-500 transition"
                  }>
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
        </div>

        {/* Login button */}
        <div className="hidden md:block">
          <button className="border rounded-full px-4 py-1.5 bg-blue-600 text-white hover:bg-blue-700 transition">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
