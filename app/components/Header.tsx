"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const isDropdownActive = (items: {label:string,  href: string }[]) => {
    return items.some((item) => pathname === item.href);
  };

  return (
    <header className="py-4">
      <nav className="w-full flex items-center justify-between px-6 text-dark">
        <div>
          <h1 className="text-xl font-bold">SEKOLAHKU</h1>
        </div>

        <div className="flex gap-x-6">
          <Link
            href="/"
            className={isActive("/") ? "font-bold text-blue-400" : ""}>
            Dashboard
          </Link>

          <DropdownMenu
            label="Media"
            isActive={isDropdownActive([
              { label: "Foto", href: "/pages/media/photos" },
              { label: "Video", href: "/pages/media/videos" },
            ])}
            items={[
              { label: "Foto", href: "/pages/media/photos" },
              { label: "Video", href: "/pages/media/videos" },
            ]}
          />

          <DropdownMenu
            label="Profil"
            isActive={isDropdownActive([
              { label: "Struktur Organisasi", href: "/pages/profile/structure-organizational" },
              { label: "Data Guru", href: "/pages/profile/data_teacher" },
              { label: "Data Staf", href: "/pages/profile/data_staff" },
              { label: "Ekstrakurikuler", href: "/pages/profile/extracurricular" },
            ])}
            items={[
              { label: "Struktur Organisasi", href: "/pages/profile/structure-organizational" },
              { label: "Data Guru", href: "/pages/profile/data_teacher" },
              { label: "Data Staf", href: "/pages/profile/data_staff" },
              { label: "Ekstrakurikuler", href: "/pages/profile/extracurricular" },
            ]}
          />

          <Link href="/kontak">Kontak</Link>
        </div>

        <div>
          <button className="border rounded-2xl p-2 bg-blue-600 text-white">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
}
