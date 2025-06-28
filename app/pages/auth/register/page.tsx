'use client'
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "PARENT", // Default value
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", formData);
      setMessage("✅ Register success: " + res.data.data.email);
    } catch (err: any) {
      setMessage("❌ Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <select name="role" value={formData.role} onChange={handleChange} className="border p-2 w-full">
        <option value="ADMIN">Admin</option>
        <option value="TEACHER">Teacher</option>
        <option value="PARENT">Parent</option>
        <option value="STUDENT">Student</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Register
      </button>

      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
