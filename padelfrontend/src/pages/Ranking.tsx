import { Crown } from "lucide-react"; // 👑
import { jugadoresMock } from "../data/players";

export default function Ranking() {
  const ranking = [...jugadoresMock].sort((a, b) => b.puntos - a.puntos);

  const getRowClass = (index: number) => {
    switch (index) {
      case 0:
        return "bg-yellow-100"; // 🥇 oro
      case 1:
        return "bg-gray-100"; // 🥈 plata
      case 2:
        return "bg-orange-100"; // 🥉 bronce
      default:
        return "bg-white";
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded p-6">
      <h2 className="text-2xl font-bold mb-4">🏆 Ranking de Jugadores</h2>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Jugador</th>
            <th className="p-2">Puntos</th>
            <th className="p-2">Ganados</th>
            <th className="p-2">Perdidos</th>
          </tr>
        </thead>
        <tbody>
          {ranking.slice(0, 10).map((jugador, index) => (
            <tr
              key={jugador.id}
              className={`${getRowClass(index)} border-b hover:bg-opacity-80`}
            >
              <td className="p-2 font-semibold">{index + 1}</td>
              <td className="p-2">
                <button className="text-black hover:underline flex items-center cursor-pointer">
                  {jugador.nombre}
                  {index === 0 && (
                    <Crown className="ml-2 w-5 h-5 text-yellow-500" />
                  )}
                </button>
              </td>
              <td className="p-2">{jugador.puntos}</td>
              <td className="p-2">{jugador.partidos.ganados}</td>
              <td className="p-2">{jugador.partidos.perdidos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
