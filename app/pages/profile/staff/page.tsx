"use client";

import { FaUser } from "react-icons/fa";

export default function Staff() {
  const staffs = [
    {
      name: "Siti Aminah",
      position: "Staf Tata Usaha",
    },
    {
      name: "Rudi Hartono",
      position: "Bendahara Sekolah",
    },
    {
      name: "Agus Wijaya",
      position: "Petugas Perpustakaan",
    },
    {
      name: "Tari Susanti",
      position: "Staf Kesiswaan",
    },
    {
      name: "Fajar Alamsyah",
      position: "Keamanan Sekolah",
    },
    {
      name: "Lina Marlina",
      position: "Petugas Kebersihan",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Daftar Staf Sekolah</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Berikut adalah para staf sekolah yang membantu kelancaran kegiatan operasional sehari-hari.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {staffs.map((staff, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition duration-300 p-6 text-center group"
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
                <FaUser size={28} />
              </div>
              <h3 className="text-lg font-bold text-blue-700 group-hover:text-blue-900">{staff.name}</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">{staff.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
