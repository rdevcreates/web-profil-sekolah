"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl border border-blue-100 shadow-md p-6">
      
      {/* Contact Info */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-800">Hubungi Kami</h3>

        <div className="flex items-start gap-4">
          <div className="text-blue-600 mt-1">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Telepon</p>
            <p className="text-sm text-gray-600">+62 812 3456 7890</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-blue-600 mt-1">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Email</p>
            <p className="text-sm text-gray-600">info@sekolahkeren.sch.id</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="text-blue-600 mt-1">
            <FaMapMarkerAlt />
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Alamat</p>
            <p className="text-sm text-gray-600">
              Jl. Pendidikan No. 123, Jakarta Selatan, Indonesia
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div className="w-full h-64 md:h-auto rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4790384386077!2d106.8190518747535!3d-6.200338993788584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e9a13a746d%3A0x3a4fc67cfc51c59b!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1718338450000!5m2!1sid!2sid"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0 w-full h-full"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
