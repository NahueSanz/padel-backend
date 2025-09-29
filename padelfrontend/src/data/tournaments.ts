export type Tournament = {
  id: number;
  nombre: string;
  ubicacion: string;
  fecha: string;
  categoria: string;
  cupos: number;
  inscritos: number;
};

export const torneosMock: Tournament[] = [
  {
    id: 1,
    nombre: "Torneo Apertura 2025",
    ubicacion: "Buenos Aires, Palermo",
    fecha: "2025-10-15",
    categoria: "C7/C8",
    cupos: 16,
    inscritos: 12,
  },
  {
    id: 2,
    nombre: "Copa Primavera",
    ubicacion: "La Plata",
    fecha: "2025-11-05",
    categoria: "C9",
    cupos: 12,
    inscritos: 10,
  },
  {
    id: 3,
    nombre: "Master Sur",
    ubicacion: "Quilmes",
    fecha: "2025-12-01",
    categoria: "C3",
    cupos: 20,
    inscritos: 18,
  },
];
