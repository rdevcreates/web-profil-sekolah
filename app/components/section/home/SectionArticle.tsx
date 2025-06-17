"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionArticle() {
  const articles = [
    {
      title: "Tips Belajar Efektif di Era Digital",
      image: "/assets/images/article/article-1.jpeg",
      date: "9 Juni 2025",
    },
    {
      title: "Pentingnya Ekstrakurikuler Bagi Siswa",
      image: "/assets/images/article/article-1.jpeg",
      date: "5 Juni 2025",
    },
    {
      title: "SMK Siap Kerja: Peluang Karier Lulusan",
      image: "/assets/images/article/article-1.jpeg",
      date: "1 Juni 2025",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 px-6 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-blue-800 font-extrabold mb-4"
        >
          📰 Artikel Populer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-2xl mx-auto mb-14 text-base md:text-lg"
        >
          Artikel pilihan seputar pendidikan, perkembangan siswa, dan wawasan terkini.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-44 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-5 text-left">
                <span className="text-xs text-gray-500 block mb-1">
                  {article.date}
                </span>
                <h3 className="text-lg font-semibold text-blue-700 leading-snug">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-800 transition duration-300">
            Lihat Semua Artikel
          </button>
        </motion.div>
      </div>
    </section>
  );
}
