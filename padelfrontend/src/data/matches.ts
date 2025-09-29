export type Match = {
  id: number;
  ubicacion: string;
  inscritos: number;
  maxJugadores: number;
  fecha: string; // ISO o string simple
  categoria: string;
};

export const matchesMock: Match[] = [
  {
    id: 1,
    ubicacion: "Palermo, Buenos Aires",
    inscritos: 2,
    maxJugadores: 4,
    fecha: "2025-10-01 18:00",
    categoria: "C5",
  },
  {
    id: 2,
    ubicacion: "La Plata",
    inscritos: 1,
    maxJugadores: 4,
    fecha: "2025-10-02 17:00",
    categoria: "C8",
  },
  {
    id: 3,
    ubicacion: "Quilmes",
    inscritos: 3,
    maxJugadores: 4,
    fecha: "2025-10-03 19:00",
    categoria: "C3",
  },
  {
    id: 4,
    ubicacion: "Belgrano, Buenos Aires",
    inscritos: 0,
    maxJugadores: 4,
    fecha: "2025-10-01 20:00",
    categoria: "C6/C7",
  },
];
