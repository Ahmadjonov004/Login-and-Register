import { Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen ">
      <div className="bg-blue shadow-2xl rounded-2xl p-5 md:p-10 w-full max-w-md text-center space-y-7">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Xush kelibsiz!</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Iltimos, davom etish uchun quyidagi tugmalardan birini tanlang.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="w-full md:w-1/2 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl font-semibold transition text-center"
          >
            Kirish
          </Link>
          <Link
            to="/register"
            className="w-full md:w-1/2 py-2 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white rounded-xl font-semibold transition text-center"
          >
            Ro‘yxatdan o‘tish
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
