"use client";

import { motion } from "framer-motion";

export default function SectionExtracurricular() {
  const categories = [
    { icon: "🎨", label: "Seni & Musik" },
    { icon: "⚽", label: "Olahraga" },
    { icon: "💻", label: "Teknologi" },
    { icon: "📖", label: "Jurnalistik" },
    { icon: "🌿", label: "Pramuka" },
    { icon: "🗣️", label: "Debat" },
    { icon: "🎭", label: "Teater" },
    { icon: "🧪", label: "Sains Club" },
    { icon: "🧘", label: "Kesehatan Mental" },
  ];

  const itemsPerRow = 4;
  const isIncompleteRow = categories.length % itemsPerRow !== 0;
  const showMoreButton = isIncompleteRow;

  return (
    <section className="bg-blue-50 px-6 lg:px-20 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6">
          Pilihan Ekstrakurikuler 📚
        </h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Beragam kegiatan untuk menunjang pengembangan bakat dan karakter siswa.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white hover:bg-blue-100 p-6 rounded-xl shadow text-center transition duration-300"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="text-sm font-semibold text-blue-700">{cat.label}</h3>
            </div>
          ))}

          {showMoreButton && (
            <div className="flex items-center justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
                Selengkapnya →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
