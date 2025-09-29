import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Canchas from "./pages/Canchas";
import Perfil from "./pages/Perfil";
import Ranking from "./pages/Ranking";
import Torneos from "./pages/Torneos";
import Partidos from "./pages/Partidos";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canchas" element={<Canchas />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/torneos" element={<Torneos />} />
        <Route path="/partidos" element={<Partidos />} />
      </Routes>
    </div>
  );
}
