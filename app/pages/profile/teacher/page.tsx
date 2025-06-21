"use client";

import { motion } from "framer-motion";
import { FaChalkboardTeacher } from "react-icons/fa";

const teachers = [
  { name: "Budi Santosa, S.Pd", subject: "Matematika" },
  { name: "Rina Kartika, M.Pd", subject: "Bahasa Indonesia" },
  { name: "Deni Prasetyo, S.Pd", subject: "Fisika" },
  { name: "Indah Permata, M.Pd", subject: "Biologi" },
  { name: "Dian Saputra, S.Kom", subject: "Informatika" },
  { name: "Wahyudi, A.Md", subject: "Kewirausahaan" },
];

export default function Teacher() {
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
          Daftar Guru
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-12 text-sm sm:text-base"
        >
          Kenali tenaga pengajar kami yang profesional dan berdedikasi dalam mendidik siswa.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {teachers.map((teacher, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="w-20 h-20 mx-auto flex items-center justify-center bg-blue-100 text-blue-700 rounded-full mb-4">
                <FaChalkboardTeacher size={28} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-blue-700 group-hover:text-blue-900">
                {teacher.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-800">
                {teacher.subject}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
