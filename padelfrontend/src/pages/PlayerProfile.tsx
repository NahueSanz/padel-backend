import Button from "../components/Button";

type Partidos = {
  ganados?: number;
  perdidos?: number;
};

type PlayerProfileProps = {
  nombre?: string;
  edad?: number;
  nivel?: string;
  ranking?: number;
  ciudad?: string;
  partidos?: Partidos;
  puntos?: number;
};

export default function PlayerProfile({
  nombre,
  edad,
  nivel,
  ranking,
  ciudad,
  partidos,
  puntos,
}: PlayerProfileProps) {
  // Si hay nombre, usamos la primera letra como "avatar"
  const avatar = nombre ? (
    <span className="text-xl font-bold text-white">
      {nombre.charAt(0).toUpperCase()}
    </span>
  ) : (
    <span className="text-xl text-white">👤</span>
  );

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

      <div className="mt-4">
        <Button variant="primary">Editar Perfil</Button>
      </div>
    </div>
  );
}
