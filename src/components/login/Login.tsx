import React, { useState } from "react";
import axios from "axios";
import loginImg from "../../assets/images/loginImg.png";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/loader/Loader";

const Login: React.FC = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState({username:'', password:''});
  const [access] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(prev => ({
      ...prev, [e.target.name]: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors ={
      username:'',
      password: ''
    }
    let hasError = false;

    if(!form.username.trim()){
      newErrors.username = 'Username kiriting';
      hasError = true;
    }

    if(!form.password.trim()){
      newErrors.password = 'Parolni kiriting';
      hasError = true;
    }
    if(hasError){
      setErrors(newErrors);
      return;
    }
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://onlyauth.pythonanywhere.com/token/",
        {
          username: form.username,
          password: form.password,
        }
      );
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      setError("");
      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (err) {
      setError("Login yoki parol noto‘g‘ri");
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen realtive">
      <div className="lg:w-1/2 w-full flex items-center justify-center p-3 md:p-6 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md  p-4 md:p-8 rounded-2xl "
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#252525]">
            Xush kelibsiz!
          </h2>
          <p className="text-center text-[#4B4B4B] text-[14px] md:text-[16px] font-normal mb-8 md:mb-[50px]">
            Login parolingizni kiriting o‘z kabinetingizga kiring.
          </p>

          <div className="mb-[15px] md:mb-[20px]">
            <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[5px] md:mb-[9px]">
              Login
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Loginingizni kiriting"
              className="w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            {errors.username && <p className="text-red-500">{errors.username}</p>}
            
          </div>

          <div className="mb-[30px] md:mb-[40px] relative">
            <label className="flex justify-start text-[16px] md:text-[18px] font-medium text-[#252525] mb-[5px] md:mb-[9px]">
              Parol
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Parolingizni kiriting"
              className=" w-full px-4 py-[10px] md:py-[12px] border-none text-[16px] font-normal bg-[#F9F8FA] rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
            <FaRegEye
              className="absolute top-[44px] md:top-[54px] right-4 "
              onClick={togglePassword}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {access && <p className="text-green-500 text-sm">{access}</p>}
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-full">
              <Loader />
            </div>
          ) : (
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-semibold transition"
            >
              Kirish
            </button>
          )}
        </form>
      </div>
      <div className="hidden xl:max-w-[600px] max-w-[500px]  lg:block w-full  absolute  top-[50px] right-[50px] bottom-[50px] z-9 ">
        <img
          src={loginImg}
          alt="Login"
          className="object-contain w-full h-64 md:h-full"
        />
      </div>
    </div>
  );
};

export default Login;
