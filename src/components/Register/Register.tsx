import React, { useState } from "react";
import axios from "axios";
import loginImg from "../../assets/images/loginImg.png";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

const Register: React.FC = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });
  
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
    const togglePassword =()=> {
      setShowPassword(!showPassword);
    }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "https://onlyauth.pythonanywhere.com/register/",
        form
      );
      setMessage("Muvaffaqiyatli ro'yxatdan o'tdingiz");
      navigate('/login')
      setError("");
      console.log("Success:", response.data);
    } catch (err: any) {
      setError("Ro'yxatdan o‘tishda xatolik yuz berdi");
      setMessage("");
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="flex min-h-screen realtive">
      <div className="md:w-1/2 w-full flex items-center justify-center p-3 md:p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-6 bg-white rounded-2xl  space-y-4"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Ro‘yxatdan o‘tish
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Kerakli maʼlumotlarni kiriting
          </p>
          <div className="mb-[15px] md:mb-[20px]">
            <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[9px]">
              Ismingiz
            </label>
            <input
              type="text"
              name="first_name"
              placeholder="Ismingiz"
              value={form.first_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="mb-[15px] md:mb-[20px]">
            <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[9px]">
              Familiyangiz
            </label>
            <input
              type="text"
              name="last_name"
              placeholder="Familiyangiz"
              value={form.last_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>
          <div className="flex justify-center items-center gap-[20px]">
            
            <div className="">
              <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[9px]">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />

            </div>
            <div className="">
              <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[9px]">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
          </div>

          <div className="mb-[15px] md:mb-[20px] relative">
            <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[9px]">
              Parol
            </label>
            <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Parol"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
          <FaRegEye className='absolute top-[52px] right-4 ' onClick={togglePassword}/>
          </div>
         

          {message && (
            <p className="text-green-600 text-sm text-center">{message}</p>
          )}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-semibold transition"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>
        <div className="hidden md:block w-full xl:max-w-[600px] max-w-[500px] absolute  top-[50px] right-[50px] bottom-[50px] z-9 ">
          <img
            src={loginImg}
            alt="Login"
            className="object-cover w-full h-64 md:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
