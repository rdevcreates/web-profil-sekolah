export const menuItems = [
  { label: "Dashboard", href: "/", type: "link" },
  {
    label: "Media",
    type: "dropdown",
    items: [
      { label: "Foto", href: "/pages/media/photos" },
      { label: "Video", href: "/pages/media/videos" },
    ],
  },
  {
    label: "Profil",
    type: "dropdown",
    items: [
      { label: "Struktur Organisasi", href: "/pages/profile/organizational" },
      { label: "Data Guru", href: "/pages/profile/teacher" },
      { label: "Data Staf", href: "/pages/profile/staff" },
      { label: "Fasilitas", href: "/pages/facility" },
      { label: "Ekstrakurikuler", href: "/pages/profile/extracurricular" },
    ],
  },
  { label: "Artikel", href: "/pages/article", type: "link" },
  { label: "Pengumuman", href: "/pages/announcement", type: "link" },
  { label: "Kontak", href: "/pages/contact", type: "link" },
] as const;
