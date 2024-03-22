import Login from "./components/Login/Login";
import Signup from "./components/Singup/Singup";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Corrected syntax */}
        <Route path="/login" element={<Login />} /> {/* Corrected syntax */}
        <Route path="/sing-up" element={<Signup />} /> {/* Corrected syntax */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
