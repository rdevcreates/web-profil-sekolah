'use client';

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Welcome back 👋</h1>
        <p className="text-gray-500">Here's what's happening with your team today.</p>
      </div>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Interviews', value: '25%', color: 'bg-gray-700' },
          { label: 'Hired', value: '51%', color: 'bg-yellow-400' },
          { label: 'Project Time', value: '10%', color: 'bg-gray-300/70 border border-dashed' },
          { label: 'Output', value: '14%', color: 'bg-white border' },
        ].map((item, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 flex flex-col gap-1 text-sm font-medium text-gray-800 shadow-sm ${item.color}`}
          >
            <span className="text-xs text-gray-600">{item.label}</span>
            <span className="text-xl font-bold">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Ringkasan Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: 'Jumlah Siswa', value: 320, bg: 'bg-blue-100', text: 'text-blue-700' },
          { label: 'Guru Terdaftar', value: 25, bg: 'bg-green-100', text: 'text-green-700' },
          { label: 'Pengumuman Aktif', value: 4, bg: 'bg-yellow-100', text: 'text-yellow-700' },
        ].map((item, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl ${item.bg} ${item.text} hover:scale-[1.02] transition shadow-sm`}
          >
            <p className="text-sm">{item.label}</p>
            <p className="text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Aktivitas Terakhir */}
      <div className="bg-white p-6 rounded-xl shadow-md border">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Aktivitas Terakhir</h2>
        <ul className="divide-y divide-gray-200 text-gray-700 text-sm">
          <li className="py-3">📢 Pengumuman baru ditambahkan oleh admin</li>
          <li className="py-3">👤 Guru baru didaftarkan: Pak Budi</li>
          <li className="py-3">📸 Foto kegiatan ditambahkan ke galeri</li>
        </ul>
      </div>
    </div>
  );
}
