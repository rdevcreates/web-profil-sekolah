"use client";

import Link from "next/link";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuItems } from "../lib/menu";
import { motion, AnimatePresence } from "framer-motion";

type MobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const isActive = (href: string) => pathname === href;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Sidebar */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed z-[70] top-0 right-0 h-full w-72 bg-white shadow-xl"
          >
            <div className="p-4 flex justify-between items-center border-b">
              <span className="text-lg font-bold">SEKOLAHKU</span>
              <button onClick={onClose}>
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
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.type === "dropdown") {
                  const isOpen = expanded === item.label;
                  return (
                    <div key={i} className="w-full">
                      <button
                        onClick={() =>
                          setExpanded(isOpen ? null : item.label)
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition"
                      >
                        {item.label}{" "}
                        {isOpen ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden flex flex-col pl-4"
                          >
                            {item.items.map((sub, j) => (
                              <Link
                                key={j}
                                href={sub.href}
                                className={`text-sm py-1.5 px-2 rounded hover:bg-gray-100 transition ${
                                  isActive(sub.href)
                                    ? "bg-gray-100 font-medium"
                                    : ""
                                }`}
                                onClick={() => {
                                  setExpanded(null);
                                  onClose();
                                }}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return null;
              })}

              <Link
                href="/pages/auth/login"
                onClick={onClose}
                className="mt-4 bg-blue-600 text-white text-sm py-2 px-4 rounded-full text-center hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </nav>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
