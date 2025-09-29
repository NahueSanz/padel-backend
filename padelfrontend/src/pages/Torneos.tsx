import { torneosMock } from "../data/tournaments";
import type { Tournament } from "../data/tournaments";

export default function Torneos() {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6">Torneos</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {torneosMock.map((torneo: Tournament) => (
          <div
            key={torneo.id}
            className="bg-white shadow rounded p-4 hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2">{torneo.nombre}</h2>
            <p className="text-gray-600">Ubicación: {torneo.ubicacion}</p>
            <p className="text-gray-600">Fecha: {torneo.fecha}</p>
            <p className="text-gray-600">Categoría: {torneo.categoria}</p>
            <p className="text-gray-600">
              Cupos: {torneo.inscritos} / {torneo.cupos}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
