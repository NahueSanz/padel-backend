import CardCancha from "../components/CardCancha";
import { canchasMock } from "../data/courts";

export default function Canchas() {
  const canchas = [...canchasMock];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {canchas.map((c, idx) => (
        <CardCancha
          key={idx}
          nombre={c.nombre}
          direccion={c.ubicacion}
          telefono={c.telefono}
        />
      ))}
    </div>
  );
}
