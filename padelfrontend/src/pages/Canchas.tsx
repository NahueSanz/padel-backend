import CardCancha from "../components/CardCancha";

export default function Canchas() {
  const canchas = [
    { nombre: "Club Palermo", direccion: "Av. Libertador 1234", nivel: "Intermedio" },
    { nombre: "La Pista", direccion: "Calle Falsa 456", nivel: "Principiante" },
    { nombre: "Padel Center", direccion: "Av. Corrientes 789", nivel: "Avanzado" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {canchas.map((c, idx) => (
        <CardCancha
          key={idx}
          nombre={c.nombre}
          direccion={c.direccion}
          nivel={c.nivel}
        />
      ))}
    </div>
  );
}
