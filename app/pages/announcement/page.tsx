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
  return `Week ${week} • ${month} ${year}`;
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-400 text-center mb-12">
          Pengumuman Sekolah
        </h1>

        <div className="space-y-16">
          {Object.entries(groupedAnnouncements).map(([week, items], i) => (
            <div key={i}>
              <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-300 inline-block mb-6 pb-1">
                {week}
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex gap-4 p-4"
                  >
                    {item.image && (
                      <div className="w-24 h-24 rounded-lg overflow-hidden relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-blue-700">
                          {item.title}
                        </h3>
                        <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
                          {item.date}
                        </span>
                      </div>

                      {item.desc && (
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
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
    </div>
  );
}
