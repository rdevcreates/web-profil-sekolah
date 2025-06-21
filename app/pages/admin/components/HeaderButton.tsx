'use client';

import { Bell } from "lucide-react";
import AccountInfo from "./AccountInfo";

export default function HeaderButton() {
  return (
    <div className="flex items-center gap-2 relative">
      <button className="relative bg-gray-100 p-2 rounded-full hover:bg-white transition">
        <Bell size={18} />
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
      </button>

      <AccountInfo />
    </div>
  );
}
