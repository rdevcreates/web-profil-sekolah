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
    icon: <FaWifi className="text-3xl text-blue-600" />,
    title: "Wi-Fi Sekolah",
    desc: "Akses internet cepat untuk mendukung kegiatan belajar dan riset siswa.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
    title: "Ruang Kelas Interaktif",
    desc: "Dilengkapi proyektor & media pembelajaran digital.",
  },
  {
    icon: <FaBookOpen className="text-3xl text-blue-600" />,
    title: "Perpustakaan",
    desc: "Koleksi buku lengkap dan ruang baca nyaman.",
  },
  {
    icon: <FaLaptop className="text-3xl text-blue-600" />,
    title: "Lab Komputer",
    desc: "Fasilitas komputer modern untuk praktikum & coding.",
  },
  {
    icon: <FaFutbol className="text-3xl text-blue-600" />,
    title: "Lapangan Olahraga",
    desc: "Area multifungsi untuk berbagai kegiatan fisik.",
  },
  {
    icon: <FaBus className="text-3xl text-blue-600" />,
    title: "Transportasi Sekolah",
    desc: "Fasilitas antar jemput siswa dari & ke sekolah.",
  },
];

export default function SectionFacility() {
  return (
    <section className="bg-white px-6 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-blue-800 font-extrabold mb-6"
        >
          🏫 Fasilitas Sekolah
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-xl mx-auto mb-12 text-base md:text-lg"
        >
          Kami menyediakan berbagai fasilitas terbaik untuk mendukung proses
          belajar mengajar yang efektif dan menyenangkan.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {facilities.map((facility, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 shadow-sm transition duration-300"
            >
              <div className="mb-4">{facility.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800">
                {facility.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{facility.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition duration-300">
            Lihat Semua Fasilitas
          </button>
        </motion.div>
      </div>
    </section>
  );
}
