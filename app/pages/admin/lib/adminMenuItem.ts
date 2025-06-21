export const adminMenuItems = [
  { label: "Dashboard", href: "/admin/pages/dashboard", type: "link" },

  {
    label: "Manajemen Media",
    type: "dropdown",
    items: [
      { label: "Kelola Foto", href: "/admin/pages/media/photos" },
      { label: "Kelola Video", href: "/admin/pages/media/videos" },
    ],
  },

  {
    label: "Manajemen Profil",
    type: "dropdown",
    items: [
      { label: "Struktur Organisasi", href: "/admin/pages/profile/organizational" },
      { label: "Data Guru", href: "/admin/pages/profile/teacher" },
      { label: "Data Staf", href: "/admin/pages/profile/staff" },
      { label: "Fasilitas Sekolah", href: "/admin/pages/profile/facility" },
      { label: "Ekstrakurikuler", href: "/admin/pages/profile/extracurricular" },
    ],
  },

  {
    label: "Konten",
    type: "dropdown",
    items: [
      { label: "Artikel", href: "/admin/pages/article" },
      { label: "Pengumuman", href: "/admin/pages/announcement" },
      { label: "Halaman Statis", href: "/admin/pages/pages" },
    ],
  },

  {
    label: "User Management",
    type: "dropdown",
    items: [
      { label: "Admin & Operator", href: "/pages/admin/users" },
      { label: "Role & Akses", href: "/admin/pages/roles" },
    ],
  },

  {
    label: "Statistik & Laporan",
    type: "dropdown",
    items: [
      { label: "Aktivitas Pengunjung", href: "/admin/pages/stats/visitors" },
      { label: "Log Sistem", href: "/admin/pages/stats/logs" },
    ],
  },

  { label: "Pengaturan Website", href: "/admin/pages/settings", type: "link" },
] as const;
