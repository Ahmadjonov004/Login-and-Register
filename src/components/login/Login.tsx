import React, { useState } from 'react';
import axios from 'axios';
import loginImg from '../../assets/images/loginImg.png'; 

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
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      setError('');

    } catch (err) {
      setError("Login yoki parol noto‘g‘ri");
    }
  };

  return (
    <div className="flex min-h-screen realtive">
      
      <div className="md:w-1/2 w-full flex items-center justify-center p-3 md:p-6 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md  p-4 md:p-8 rounded-2xl shadow-lg relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#252525]">Xush kelibsiz!</h2>
          <p className="text-center text-[#4B4B4B] text-[14px] md:text-[16px] font-normal mb-8 md:mb-[50px]">
            Login parolingizni kiriting o‘z kabinetingizga kiring.
          </p>

          <div className='mb-[15px] md:mb-[20px]'>
            <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[9px]">Login</label>
            <input
              type="text"
              name="login"
              value={form.login}
              onChange={handleChange}
              placeholder="Loginingizni kiriting"
              required
              className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className='mb-[30px] md:mb-[40px]'>
            <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[9px]">Parol</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Parolingizni kiriting"
              required
              className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"

            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-semibold transition"
          >
            Kirish
          </button>
        </form>
      </div>
      <div className="hidden md:block w-full max-w-[600px] absolute  top-[50px] right-[50px] bottom-[50px] z-9 ">
        <img
          src={loginImg}
          alt="Login"
          className="object-cover w-full h-64 md:h-full"
        />
      </div>
    </div>
  );
};

export default Login;
