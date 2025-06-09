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
    <section className="min-h-screen bg-blue-400 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-white font-extrabold mb-10">
          Artikel Populer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <span className="text-sm text-gray-500">{article.date}</span>
                <h3 className="text-lg font-semibold mt-2 text-gray-800">
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
