import { matchesMock } from "../data/matches";
import type { Match } from "../data/matches";
import Button from "../components/Button";

export default function Partidos() {
  const handleCrearPartido = () => {
    // Por ahora solo mostramos alerta, luego abrirá un modal/form
    alert("Aquí se abrirá el formulario para crear un partido");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Partidos Cercanos</h1>
        <Button onClick={handleCrearPartido}>Crear Partido</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {matchesMock.map((match: Match) => (
          <div
            key={match.id}
            className="bg-white shadow rounded p-4 hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">Partido #{match.id}</h2>
            <p className="text-gray-600">Ubicación: {match.ubicacion}</p>
            <p className="text-gray-600">
              Jugadores: {match.inscritos} / {match.maxJugadores}
            </p>
            <p className="text-gray-600">Fecha y hora: {match.fecha}</p>
            <p className="text-gray-600">Categoría: {match.categoria}</p>

            <Button
              variant="primary"
              onClick={() => {
                // Lógica de unirse al partido
                alert(`Te uniste al partido #${match.id}`);
              }}
            >
              Unirse
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
