import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./components/login/Login";
import Home from "./pages/Home";
import Register from "./components/Register/Register";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
