"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionWelcome() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-12 lg:px-24 py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight mb-4">
          SMK NEGERI 1 LOREM IPSUM
        </h1>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem. In id cursus mi pretium
          tellus. Tempus leo eu aenean sed diam tempor. Pulvinar vivamus
          fringilla lacus nec bibendum.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="/assets/images/sekolah.jpg"
          alt="Foto Sekolah"
          width={800}
          height={600}
          className="rounded-3xl shadow-lg object-cover w-full h-auto max-w-md md:max-w-full"
        />
      </motion.div>
    </section>
  );
}
