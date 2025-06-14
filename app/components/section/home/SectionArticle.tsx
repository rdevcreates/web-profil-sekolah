"use client";

import Image from "next/image";

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
    <section className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-400 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-blue-800 font-extrabold mb-10">
          📰 Artikel Populer
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-blue-100"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 text-left">
                <span className="text-xs text-gray-500 uppercase tracking-widest block mb-1">
                  {article.date}
                </span>
                <h3 className="text-xl font-bold text-blue-700">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
