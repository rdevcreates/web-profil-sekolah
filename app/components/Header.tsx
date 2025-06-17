"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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
    <>
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="text-xl font-extrabold text-gray-800">SEKOLAHKU</div>

          {/* Desktop */}
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
                        ? "bg-blue-300 text-white text-base shadow-sm"
                        : "text-gray-600 hover:bg-white hover:text-black"
                    }`}>
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

          {/* Mobile Hamburger */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar dari kanan */}
      <aside
        className={`fixed z-[70] top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-lg font-bold">SEKOLAHKU</span>
          <button onClick={() => setMobileOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 p-4 overflow-y-auto">
          {menuItems.map((item, i) => {
            if (item.type === "link") {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`text-sm py-2 px-3 rounded hover:bg-gray-100 transition ${
                    isActive(item.href) ? "bg-gray-100 font-medium" : ""
                  }`}
                  onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              );
            }

            if (item.type === "dropdown") {
              const isOpen = expanded === item.label;

              return (
                <div key={i} className="w-full">
                  <button
                    onClick={() => setExpanded(isOpen ? null : item.label)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition">
                    {item.label}
                    {isOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}>
                    <div className="flex flex-col pl-4">
                      {item.items.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.href}
                          className={`text-sm py-1.5 px-2 rounded hover:bg-gray-100 transition ${
                            isActive(sub.href) ? "bg-gray-100 font-medium" : ""
                          }`}
                          onClick={() => {
                            setMobileOpen(false);
                            setExpanded(null);
                          }}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}

          <Link
            href="/pages/auth/login"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-blue-600 text-white text-sm py-2 px-4 rounded-full text-center hover:bg-blue-700 transition">
            Login
          </Link>
        </nav>
      </aside>
    </>
  );
}
