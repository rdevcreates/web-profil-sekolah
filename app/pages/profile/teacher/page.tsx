"use client";

import { FaChalkboardTeacher } from "react-icons/fa";

export default function Teacher() {
  const teachers = [
    {
      name: "Budi Santosa, S.Pd",
      subject: "Matematika",
    },
    {
      name: "Rina Kartika, M.Pd",
      subject: "Bahasa Indonesia",
    },
    {
      name: "Deni Prasetyo, S.Pd",
      subject: "Fisika",
    },
    {
      name: "Indah Permata, M.Pd",
      subject: "Biologi",
    },
    {
      name: "Dian Saputra, S.Kom",
      subject: "Informatika",
    },
    {
      name: "Wahyudi, A.Md",
      subject: "Kewirausahaan",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6">Daftar Guru</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Kenali tenaga pengajar kami yang profesional dan berdedikasi dalam mendidik siswa.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teachers.map((teacher, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-blue-100 shadow-md hover:shadow-xl transition duration-300 p-6 text-center group"
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
                <FaChalkboardTeacher size={28} />
              </div>
              <h3 className="text-lg font-bold text-blue-700 group-hover:text-blue-900">{teacher.name}</h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">{teacher.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
