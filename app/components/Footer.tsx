"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-3">SMK Lorem Ipsum</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Membentuk pelajar tangguh dengan visi masa depan berbasis teknologi
            dan semangat nasionalisme.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Menu</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>
              <Link href="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/program" className="hover:underline">
                Program
              </Link>
            </li>
            <li>
              <Link href="/ekstrakurikuler" className="hover:underline">
                Ekstrakurikuler
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Hubungi Kami</h3>
          <ul className="text-sm text-blue-100 space-y-1">
            <li>📍 Jalan Lorem Ipsum No. 99</li>
            <li>📞 (021) 987-0011</li>
            <li>✉️ info@sekolahlorem.sch.id</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-xs text-blue-200">
        &copy; {new Date().getFullYear()} SMK Lorem Ipsum. All rights reserved.
      </div>
    </footer>
  );
}
