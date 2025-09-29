export type Partidos = {
  ganados: number;
  perdidos: number;
};

export type Jugador = {
  id: number;
  nombre: string;
  puntos: number;
  partidos: Partidos;
};

export const jugadoresMock: Jugador[] = [
  { id: 1, nombre: "Nahuel", puntos: 2500, partidos: { ganados: 120, perdidos: 40 } },
  { id: 2, nombre: "Sofía", puntos: 2200, partidos: { ganados: 100, perdidos: 60 } },
  { id: 3, nombre: "Martín", puntos: 2000, partidos: { ganados: 90, perdidos: 70 } },
  { id: 4, nombre: "Laura", puntos: 1800, partidos: { ganados: 80, perdidos: 50 } },
  { id: 5, nombre: "Diego", puntos: 1600, partidos: { ganados: 70, perdidos: 60 } },
  { id: 6, nombre: "Ana", puntos: 1500, partidos: { ganados: 65, perdidos: 55 } },
  { id: 7, nombre: "Pablo", puntos: 1400, partidos: { ganados: 60, perdidos: 50 } },
  { id: 8, nombre: "Carla", puntos: 1300, partidos: { ganados: 55, perdidos: 45 } },
  { id: 9, nombre: "Lucas", puntos: 1200, partidos: { ganados: 50, perdidos: 50 } },
  { id: 10, nombre: "Valentina", puntos: 1100, partidos: { ganados: 48, perdidos: 52 } },
];
