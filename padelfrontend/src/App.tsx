import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Canchas from "./pages/Canchas";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canchas" element={<Canchas />} />
        {/* Más rutas: /torneos, /ranking, /perfil */}
      </Routes>
    </div>
  );
}
