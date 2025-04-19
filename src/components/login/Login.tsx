import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
  const [form, setForm] = useState({ login: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://onlyauth.pythonanywhere.com/api/token/', {
        username: form.login,
        password: form.password,
      });
      console.log('Token:', response.data);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      setError('');
    } catch (err) {
      setError('Login yoki parol noto‘g‘ri');
    }
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen  bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-xl space-y-4">
        <h2 className="text-3xl font-bold text-center">Xush kelibsiz!</h2>
        <p className="text-center text-gray-500 text-sm">Login parolingizni kiriting</p>
        <input
          type="text"
          name="login"
          placeholder="Loginingizni kiriting"
          value={form.login}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Parolingizni kiriting"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-semibold transition"
        >
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;