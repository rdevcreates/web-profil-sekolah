"use client";

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
  isActive? : boolean
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
        className="flex items-center gap-1 hover:text-blue-400 transition"
      >
        {label} <ChevronDown size={16} />
      </button>

      {items.length > 0 && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-500 text-black transition-all duration-200 overflow-hidden ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {items.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block text-white px-4 py-2 hover:bg-blue-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
