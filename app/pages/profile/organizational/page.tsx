"use client";

import { FaUserTie } from "react-icons/fa";

export default function StructurOrganizational() {
  const structure = [
    {
      role: "Kepala Sekolah",
      name: "Drs. Budi Santoso",
    },
    {
      role: "Wakil Kepala Sekolah",
      name: "Rina Kartika, M.Pd",
    },
    {
      role: "Koordinator Kurikulum",
      name: "Deni Prasetyo, S.Pd",
    },
    {
      role: "Kesiswaan",
      name: "Indah Permata, M.Pd",
    },
    {
      role: "Humas",
      name: "Dian Saputra, S.Kom",
    },
    {
      role: "Kepala TU",
      name: "Wahyudi, A.Md",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-100 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">
          Struktur Organisasi Sekolah
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Kenali jajaran pengurus inti dalam organisasi sekolah kami untuk tahun ajaran 2025/2026.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {structure.map((person, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-xl p-6 border border-blue-200 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full">
                  <FaUserTie size={32} />
                </div>
                <h3 className="text-lg font-semibold text-blue-700 group-hover:text-blue-900">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
