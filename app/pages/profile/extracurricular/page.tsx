'use client';

import Image from "next/image";

export default function Extracurricular() {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-10">
          Kegiatan Ekstrakurikuler Sekolah
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Berbagai kegiatan pengembangan diri yang dirancang untuk menumbuhkan potensi dan bakat siswa di luar jam pelajaran.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {activities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden text-left"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
