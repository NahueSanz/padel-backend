export type Court = {
  id: number;
  nombre: string;
  ubicacion: string;
  superficie: string;
  techada: boolean;
  precioHora: number;
  telefono: number;
};

export const canchasMock: Court[] = [
  {
    id: 1,
    nombre: "Cancha Central",
    ubicacion: "Buenos Aires, Palermo",
    superficie: "Césped sintético",
    techada: true,
    precioHora: 2500,
    telefono: 47161480,
  },
  {
    id: 2,
    nombre: "Club Padel Norte",
    ubicacion: "Buenos Aires, Núñez",
    superficie: "Cemento",
    techada: false,
    precioHora: 2000,
    telefono: 47161480,
  },
  {
    id: 3,
    nombre: "Las Águilas Padel",
    ubicacion: "La Plata",
    superficie: "Césped sintético",
    techada: true,
    precioHora: 2300,
    telefono: 47161480,
  },
  {
    id: 4,
    nombre: "Padel Sur",
    ubicacion: "Quilmes",
    superficie: "Cemento",
    techada: false,
    precioHora: 1800,
    telefono: 47161480,
  },
];
