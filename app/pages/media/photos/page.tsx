"use client";

export default function Videos() {
  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Album Video</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-lg">
              <img
              src={`https://picsum.photos/id/${i}/200/300`}
              alt={`Foto ${i+i}`}
              className="w-full h-64 object-cover"
            />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

