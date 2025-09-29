import PlayerProfile from "./PlayerProfile";

export default function Perfil() {
  // Datos de ejemplo
  const jugador = {
    nombre: "Nahuel Sanz",
    edad: 28,
    nivel: "C8",
    ranking: 120,
    ciudad: "Buenos Aires",
    partidos: { ganados: 120, perdidos: 100 },
    puntos: 100,
  };

  return (
    <div className="mt-8">
      <PlayerProfile {...jugador} />
    </div>
  );
}
