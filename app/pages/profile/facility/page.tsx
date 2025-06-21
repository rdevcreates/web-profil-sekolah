"use client";

import { motion } from "framer-motion";
import {
  FaWifi,
  FaChalkboardTeacher,
  FaBookOpen,
  FaLaptop,
  FaFutbol,
  FaBus,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaWifi size={28} />,
    title: "Wi-Fi Sekolah",
    desc: "Akses internet cepat untuk mendukung kegiatan belajar dan riset siswa.",
  },
  {
    icon: <FaChalkboardTeacher size={28} />,
    title: "Ruang Kelas Interaktif",
    desc: "Dilengkapi dengan proyektor dan media pembelajaran digital.",
  },
  {
    icon: <FaBookOpen size={28} />,
    title: "Perpustakaan",
    desc: "Koleksi buku lengkap dan ruang baca yang nyaman.",
  },
  {
    icon: <FaLaptop size={28} />,
    title: "Laboratorium Komputer",
    desc: "Fasilitas komputer modern untuk kegiatan praktikum dan coding.",
  },
  {
    icon: <FaFutbol size={28} />,
    title: "Lapangan Olahraga",
    desc: "Area olahraga multifungsi untuk berbagai kegiatan fisik.",
  },
  {
    icon: <FaBus size={28} />,
    title: "Transportasi Sekolah",
    desc: "Fasilitas antar-jemput untuk siswa dari dan ke sekolah.",
  },
];

export default function Facility() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-blue-400 mb-6"
        >
          Fasilitas Sekolah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-12 text-sm sm:text-base"
        >
          Kami menyediakan berbagai fasilitas untuk mendukung proses belajar
          mengajar yang efektif dan menyenangkan bagi seluruh siswa.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white hover:bg-blue-100 p-6 rounded-xl shadow-md border border-blue-100 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto bg-blue-50 text-blue-600 rounded-full mb-4">
                {facility.icon}
              </div>
              <h3 className="text-base font-semibold text-blue-800 mb-2">
                {facility.title}
              </h3>
              <p className="text-sm text-gray-600">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
