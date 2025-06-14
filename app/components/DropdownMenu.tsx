'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownMenuProps = {
  label: string;
  items?: DropdownItem[];
  isActive?: boolean;
};

export default function DropdownMenu({ label, items = [], isActive = false }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors flex items-center gap-1 
          ${isActive ? "bg-white text-black shadow-sm" : "text-gray-600 hover:bg-white hover:text-black"}`}
      >
        {label} <ChevronDown size={16} className="mt-[1px]" />
      </button>

      {items.length > 0 && (
        <div
          className={`absolute mt-2 w-44 right-0 bg-white shadow-xl rounded-xl ring-1 ring-gray-100 transition-all duration-200 z-50
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
