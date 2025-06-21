"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const activities = [
  {
    title: "Paduan Suara",
    desc: "Paduan suara adalah wadah bagi siswa yang menyukai musik dan bernyanyi. Di sini siswa dapat melatih teknik vokal, tampil di acara sekolah, dan ikut kompetisi tingkat daerah hingga nasional.",
    image: "/assets/images/article/article-1.jpeg",
  },
  {
    title: "Tim Sepak Bola",
    desc: "Tim sepak bola sekolah membuka kesempatan bagi siswa untuk berkembang dalam dunia olahraga, melatih kekompakan, dan berprestasi di berbagai turnamen.",
    image: "/assets/images/article/article-1.jpeg",
  },
  {
    title: "Karya Ilmiah Remaja (KIR)",
    desc: "KIR merupakan wadah bagi siswa yang tertarik di bidang penelitian, sains, dan teknologi. Siswa akan dibimbing membuat karya tulis ilmiah dan mengikuti lomba karya ilmiah remaja.",
    image: "/assets/images/article/article-1.jpeg",
  },
  {
    title: "Pramuka",
    desc: "Kegiatan kepramukaan membantu siswa menjadi lebih mandiri, disiplin, dan tangguh. Pramuka juga mengajarkan nilai-nilai kebersamaan dan kepemimpinan.",
    image: "/assets/images/article/article-1.jpeg",
  },
  {
    title: "English Club",
    desc: "English Club membantu siswa mengasah kemampuan berbahasa Inggris melalui diskusi, debat, storytelling, dan games interaktif.",
    image: "/assets/images/article/article-1.jpeg",
  },
];

export default function Extracurricular() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6"
        >
          Kegiatan Ekstrakurikuler Sekolah
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base"
        >
          Berbagai kegiatan pengembangan diri yang dirancang untuk menumbuhkan
          potensi dan bakat siswa di luar jam pelajaran.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-left"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
        </motion.div>
      </div>
    </div>
  );
}
