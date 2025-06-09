"use client";

import Image from "next/image";

export default function SectionHistory() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-20 bg-white">
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/assets/images/sekolah.jpg"
          alt="Foto Sekolah Lorem Ipsum"
          width={800}
          height={600}
          className="rounded-3xl shadow-xl object-cover"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight mb-6">SEJARAH SMK NEGERI 1 LOREM IPSUM</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
      </div>
    </section>
  );
}
