"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-10 px-6">
      <div className="max-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="">
          <h3 className="text-xl font-bold mb-2">Sekolah lorem ipsum</h3>
          <p className="text-sm text-gray-200 leading-relaxed">
            Membentuk pelajar tangguh dengan visi masa depan, teknologi dan
            semangat nasionalisme
          </p>
        </div>

        <div className="">
          <h3 className="text-xl font-bold mb-2">Menu</h3>
          <ul className="space-y-2 text-sm text-gray-200">
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
        <div className="">
          <h3 className="font-bold text-xl mb-2">Hubungi Kami</h3>
          <ul>
            <li>Jalan Lorem Ipsum No. 99</li>
            <li>Telp: (021) 987-0011</li>
            <li>Email: info@sekolahlorem.sch.id</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Sekolah Lorem Ipsum. All rights
        reserved.
      </div>
    </footer>
  );
}
