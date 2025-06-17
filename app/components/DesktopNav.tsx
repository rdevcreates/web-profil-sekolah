"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DropdownMenu from "./DropdownMenu";
import { menuItems } from "../lib/menu";

export default function DesktopNav() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const isDropdownActive = (items: ReadonlyArray<{ label: string; href: string }>) =>
    items.some((item) => pathname === item.href);

  return (
    <nav className="hidden md:flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-full">
      {menuItems.map((item, index) => {
        if (item.type === "link") {
          return (
            <Link
              key={index}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-blue-300 text-white text-base shadow-sm"
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
              items={[...item.items]}
            />
          );
        }

        return null;
      })}
    </nav>
  );
}