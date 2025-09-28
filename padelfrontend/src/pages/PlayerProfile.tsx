type PlayerProfileProps = {
  nombre: string;
  edad: number;
  nivel: string;
  ranking: number;
  ciudad: string;
};

export default function PlayerProfile({
  nombre,
  edad,
  nivel,
  ranking,
  ciudad,
}: PlayerProfileProps) {
  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6">
      <h2 className="text-2xl font-bold mb-2">{nombre}</h2>
      <p className="text-gray-600">Edad: {edad}</p>
      <p className="text-gray-600">Nivel: {nivel}</p>
      <p className="text-gray-600">Ranking: {ranking}</p>
      <p className="text-gray-600">Ciudad: {ciudad}</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Editar Perfil
      </button>
    </div>
  );
}
