import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Padel App</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/canchas">Canchas</Link>
        <Link to="/torneos">Torneos</Link>
        <Link to="/ranking">Ranking</Link>
        <Link to="/perfil">Perfil</Link>
      </div>
    </nav>
  );
}
