"use client";

import Image from "next/image";

export default function SectionExtracurricular() {
  const activities = [
    {
      title: "Paduan Suara",
      desc: "Bergabunglah dengan paduan suara sekolah dan tunjukkan bakat menyanyimu!",
      image: "/assets/images/article/article-1.jpeg",
    },
    {
      title: "Tim Sepak Bola",
      desc: "Ayo gabung tim sepak bola dan tunjukkan skill-mu di lapangan!",
      image: "/assets/images/article/article-1.jpeg",
    },
    {
      title: "Karya Ilmiah Remaja (KIR)",
      desc: "Eksplorasi ide dan riset ilmiah bareng tim KIR sekolah!",
      image: "/assets/images/article/article-1.jpeg",
    },
  ];

  return (
    <section className="bg-blue-50 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-blue-800 font-extrabold mb-10">
          🎨 Kegiatan Ekstrakurikuler
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Temukan berbagai kegiatan ekstrakurikuler yang bisa diikuti oleh siswa untuk mengembangkan minat dan bakat mereka.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 text-left"
            >
              <Image
                src={activity.image}
                alt={activity.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-700">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mt-2">{activity.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-blue-700 transition duration-300">
            Lihat Semua Kegiatan
          </button>
        </div>
      </div>
    </section>
  );
}
