import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-green-700 text-white h-screen p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">Padel Menu</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:bg-green-600 p-2 rounded">Home</Link>
        <Link to="/canchas" className="hover:bg-green-600 p-2 rounded">Canchas</Link>
        <Link to="/torneos" className="hover:bg-green-600 p-2 rounded">Torneos</Link>
        <Link to="/ranking" className="hover:bg-green-600 p-2 rounded">Ranking</Link>
        <Link to="/perfil" className="hover:bg-green-600 p-2 rounded">Perfil</Link>
      </nav>
    </div>
  );
}
