import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://onlyauth.pythonanywhere.com/auth/register/", form);
      setMessage("Muvaffaqiyatli ro'yxatdan o'tdingiz");
      setError('');
      console.log("Success:", response.data);
    } catch (err: any) {
      setError("Ro'yxatdan o‘tishda xatolik yuz berdi");
      setMessage('');
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen  bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Ro‘yxatdan o‘tish
        </h2>
        <p className="text-center text-gray-500 text-sm">
          Kerakli maʼlumotlarni kiriting
        </p>

        <input
          type="text"
          name="first_name"
          placeholder="Ismingiz"
          value={form.first_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="last_name"
          placeholder="Familiyangiz"
          value={form.last_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Parol"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {message && <p className="text-green-600 text-sm text-center">{message}</p>}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-semibold transition"
        >
          Ro‘yxatdan o‘tish
        </button>
      </form>
    </div>
  );
};

export default Register;
