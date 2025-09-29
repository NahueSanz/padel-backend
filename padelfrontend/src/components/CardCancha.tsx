import Button from "../components/Button";

type CardCanchaProps = {
  nombre: string;
  direccion: string;
  telefono: number;
};

export default function CardCancha({
  nombre,
  direccion,
  telefono,
}: CardCanchaProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-bold text-lg">{nombre}</h3>
      <p className="text-gray-600">{direccion}</p>
      <p className="text-sm text-gray-500 mt-2">Telefono: {telefono}</p>
      <Button variant="primary">Ver detalles</Button>
      <Button variant="primary">Reserva</Button>
    </div>
  );
}
