'use client';

import { User, LogOut, Settings as SettingsIcon } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function AccountInfo() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-100 hover:bg-white p-2 rounded-full transition"
      >
        <User size={18} />
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
          <div className="px-4 py-2 text-sm text-gray-700 font-medium">
            Hello, Admin
          </div>
          <hr className="my-1" />
          <a
            href="/admin/profile"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <User size={16} />
            My Profile
          </a>
          <a
            href="/admin/settings"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <SettingsIcon size={16} />
            Settings
          </a>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left transition"
            onClick={() => {
              alert("Logging out...");
            }}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
