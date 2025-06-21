"use client";

import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

const structure = [
  { role: "Kepala Sekolah", name: "Drs. Budi Santoso" },
  { role: "Wakil Kepala Sekolah", name: "Rina Kartika, M.Pd" },
  { role: "Koordinator Kurikulum", name: "Deni Prasetyo, S.Pd" },
  { role: "Kesiswaan", name: "Indah Permata, M.Pd" },
  { role: "Humas", name: "Dian Saputra, S.Kom" },
  { role: "Kepala TU", name: "Wahyudi, A.Md" },
];

export default function StructurOrganizational() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-6"
        >
          Struktur Organisasi Sekolah
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-12 text-sm sm:text-base"
        >
          Kenali jajaran pengurus inti dalam organisasi sekolah kami untuk tahun ajaran 2025/2026.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {structure.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full">
                  <FaUserTie size={28} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-blue-700 group-hover:text-blue-900 text-center">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
