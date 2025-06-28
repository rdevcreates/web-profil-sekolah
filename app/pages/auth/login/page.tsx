"use client";

import { login } from "@/app/services/auth";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    if (!email || !password) {
      setErrorMsg("Email and Password are required");
      setLoading(false);
      return;
    }

    try {
      const res = await login({ email, password });

      localStorage.setItem("token", res.token);
      toast.success("Login successful!");
      router.push("/pages/admin/pages/dashboard")
    } catch (error) {
      toast.error(
        error instanceof Error && error.message ? error.message : "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

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

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@sekolah.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {errorMsg && (
            <div className="text-red-500 text-sm mt-2">{errorMsg}</div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl font-semibold">
            {loading ? "Loading..." : "Login"}
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
