type CardCanchaProps = {
  nombre: string;
  direccion: string;
  nivel: string;
};

export default function CardCancha({ nombre, direccion, nivel }: CardCanchaProps) {
  return (
    <div className="bg-white shadow rounded p-4">
      <h3 className="font-bold text-lg">{nombre}</h3>
      <p className="text-gray-600">{direccion}</p>
      <p className="text-sm text-gray-500 mt-2">Nivel: {nivel}</p>
      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Ver detalles
      </button>
    </div>
  );
}
