"use client";

import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const staffs = [
  { name: "Siti Aminah", position: "Staf Tata Usaha" },
  { name: "Rudi Hartono", position: "Bendahara Sekolah" },
  { name: "Agus Wijaya", position: "Petugas Perpustakaan" },
  { name: "Tari Susanti", position: "Staf Kesiswaan" },
  { name: "Fajar Alamsyah", position: "Keamanan Sekolah" },
  { name: "Lina Marlina", position: "Petugas Kebersihan" },
];

export default function Staff() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-6"
        >
          Daftar Staf Sekolah
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-12 text-sm sm:text-base"
        >
          Berikut adalah para staf sekolah yang membantu kelancaran kegiatan operasional sehari-hari.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {staffs.map((staff, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition duration-300 p-6 text-center group"
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
                <FaUser size={28} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-blue-700 group-hover:text-blue-900">
                {staff.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-gray-800">{staff.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
