import { useState } from "react";
import Button from "../components/Button";

type Partidos = {
  ganados?: number;
  perdidos?: number;
};

type Match = {
  id: number;
  fecha: string;
  ubicacion: string;
  categoria: string;
  inscritos: number;
  maxJugadores: number;
  jugadores: string[]; // nombres de jugadores en este partido
};

type PlayerProfileProps = {
  nombre?: string;
  edad?: number;
  nivel?: string;
  ranking?: number;
  ciudad?: string;
  partidos?: Partidos;
  puntos?: number;
  reputation?: number;
  matches?: Match[];
  currentUser?: string; // nombre del usuario que está viendo el perfil
};

export default function PlayerProfile({
  nombre,
  edad,
  nivel,
  ranking,
  ciudad,
  partidos,
  puntos,
  reputation = 0,
  matches = [],
  currentUser,
}: PlayerProfileProps) {
  const [rep, setRep] = useState<number>(reputation);
  const [likesGiven, setLikesGiven] = useState<Record<number, boolean>>({});

  // Avatar
  const avatar = nombre ? (
    <span className="text-xl font-bold text-white">
      {nombre.charAt(0).toUpperCase()}
    </span>
  ) : (
    <span className="text-xl text-white">👤</span>
  );

  // Función para dar like a un jugador en un partido
  const handleLike = (matchId: number) => {
    if (!likesGiven[matchId]) {
      setRep(rep + 1);
      setLikesGiven({ ...likesGiven, [matchId]: true });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6 flex flex-col items-center">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-4">
        {avatar}
      </div>

      {/* Datos */}
      <h2 className="text-2xl font-bold mb-2">{nombre || "-"}</h2>
      <p className="text-gray-600">Edad: {edad ?? "-"}</p>
      <p className="text-gray-600">Nivel: {nivel || "-"}</p>
      <p className="text-gray-600">Ranking: {ranking ?? "-"}</p>
      <p className="text-gray-600">Ciudad: {ciudad || "-"}</p>
      <p className="text-gray-600">
        Partidos ganados: {partidos?.ganados ?? "-"}
      </p>
      <p className="text-gray-600">
        Partidos perdidos: {partidos?.perdidos ?? "-"}
      </p>
      <p className="text-gray-600">Puntos: {puntos ?? "-"}</p>
      <p className="text-gray-600">Reputación: {rep}</p>

      {/* Calendario de próximos partidos */}
      <h3 className="text-lg font-semibold mt-4 mb-2">Próximos Partidos</h3>
      {matches.length > 0 ? (
        <ul className="space-y-2 w-full">
          {matches.map((m) => (
            <li
              key={m.id}
              className="bg-gray-100 p-2 rounded flex justify-between items-center"
            >
              <div>
                <span>
                  {m.fecha} - {m.ubicacion} ({m.categoria})
                </span>
                <br />
                <span>
                  {m.inscritos}/{m.maxJugadores} jugadores
                </span>
              </div>

              {/* Solo permitir like si currentUser estuvo en este partido y no es el mismo jugador */}
              {currentUser &&
                m.jugadores.includes(currentUser) &&
                currentUser !== nombre && (
                  <Button
                    variant="secondary"
                    onClick={() => handleLike(m.id)}
                    disabled={likesGiven[m.id]}
                  >
                    {likesGiven[m.id] ? "Liked ✅" : "Dar Like"}
                  </Button>
                )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No hay partidos próximos.</p>
      )}

      <div className="mt-4">
        <Button variant="primary">Editar Perfil</Button>
      </div>
    </div>
  );
}
