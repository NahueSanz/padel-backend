import PlayerProfile from "./PlayerProfile";

export default function Perfil() {
  // Datos de ejemplo
  const jugador = {
    nombre: "Nahuel Sanz",
    edad: 28,
    nivel: "Intermedio",
    ranking: 120,
    ciudad: "Buenos Aires",
  };

  return (
    <div className="mt-8">
      <PlayerProfile {...jugador} />
    </div>
  );
}
