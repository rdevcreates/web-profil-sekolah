"use client";

import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Login ke Sekolahku
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="email@sekolah.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl font-semibold">
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Belum punya akun?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Hubungi admin
          </span>
        </p>
      </motion.div>
    </div>
  );
}
