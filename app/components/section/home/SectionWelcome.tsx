"use client";
import Image from "next/image";

export default function SectionWelcome() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight mb-6">SMK NEGERI 1 LOREM IPSUM</h1>
        <p className="space-x-6 text-gray-700 text-base md-text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/assets/images/sekolah.jpg"
          alt="Foto Sekolah Lorem Ipsum"
          width={800}
          height={600}
          className="rounded-3xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
