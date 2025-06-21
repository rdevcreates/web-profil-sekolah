'use client'

import Image from 'next/image'

export default function ArticlePage() {
  const articles = [
    {
      title: 'Tips Belajar Efektif di Era Digital',
      image: '/assets/images/article/article-1.jpeg',
      date: '9 Juni 2025',
    },
    {
      title: 'Pentingnya Ekstrakurikuler Bagi Siswa',
      image: '/assets/images/article/article-1.jpeg',
      date: '5 Juni 2025',
    },
    {
      title: 'SMK Siap Kerja: Peluang Karier Lulusan',
      image: '/assets/images/article/article-1.jpeg',
      date: '1 Juni 2025',
    },
    {
      title: 'Belajar Mandiri dengan Teknologi AI',
      image: '/assets/images/article/article-1.jpeg',
      date: '28 Mei 2025',
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-400 text-center mb-12">
          📰 Artikel Populer
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-left">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-lg font-semibold mt-2 text-gray-800">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
