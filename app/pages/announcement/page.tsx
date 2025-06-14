"use client";

import { useMemo } from "react";
import Image from "next/image";

type Announcement = {
  title: string;
  date: string;
  desc?: string;
  image?: string;
};

function getWeekNumber(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const week = Math.ceil(day / 7);
  return `Week ${week} ${month} ${year}`;
}

export default function AnnouncementPage() {
  const announcements: Announcement[] = [
    {
      title: "Pendaftaran Siswa Baru Dibuka!",
      date: "2025-06-14",
      image: "/assets/images/article/article-1.jpeg",
    },
    {
      title: "Libur Akhir Semester",
      date: "2025-06-20",
      desc: "Libur dimulai tanggal 20 Juni hingga 5 Juli. Harap semua siswa mengembalikan buku perpustakaan sebelum libur.",
      image: "/assets/images/article/article-1.jpeg",
    },
    {
      title: "Tryout Online Ujian Nasional",
      date: "2025-06-22",
      image: "/assets/images/article/article-1.jpeg",
    },
    {
      title: "Pelatihan Guru SMK",
      date: "2025-06-09",
      image: "/assets/images/article/article-1.jpeg",
    },
  ];

  const groupedAnnouncements = useMemo(() => {
    const groups: { [week: string]: Announcement[] } = {};
    announcements.forEach((a) => {
      const week = getWeekNumber(a.date);
      if (!groups[week]) groups[week] = [];
      groups[week].push(a);
    });
    return groups;
  }, [announcements]);

  return (
    <section className="min-h-screen bg-blue-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-800 text-center mb-12">
          📢 Pengumuman Sekolah
        </h1>

        <div className="space-y-10">
          {Object.entries(groupedAnnouncements).map(([week, items], i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {week}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl shadow-md border-l-4 border-blue-400 flex gap-4">
                    {item.image && (
                      <div className="flex-shrink-0 w-24 h-24 relative rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-blue-700">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500">{item.date}</p>
                      {item.desc && (
                        <p className="text-gray-700 mt-2 text-sm">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
