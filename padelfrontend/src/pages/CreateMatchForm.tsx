"use client";

import { useState } from "react";
import Button from "../components/Button";

type MatchFormData = {
  titulo: string;
  ubicacion: string;
  fechaHora: string;
  jugadores: number;
  categoria: string;
};

export default function CreateMatchForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<MatchFormData>({
    titulo: "",
    ubicacion: "",
    fechaHora: "",
    jugadores: 4,
    categoria: "Principiante",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partido creado:", formData);
    onClose(); // cerramos modal
  };

  const now = new Date().toISOString().slice(0, 16);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-center">Crear Partido</h2>

      <input
        type="text"
        name="titulo"
        placeholder="Título del partido"
        value={formData.titulo}
        onChange={handleChange}
        className="border rounded px-3 py-2"
        required
      />

      <input
        type="text"
        name="ubicacion"
        placeholder="Ubicación"
        value={formData.ubicacion}
        onChange={handleChange}
        className="border rounded px-3 py-2"
        required
      />

      <input
        type="datetime-local"
        name="fechaHora"
        value={formData.fechaHora}
        onChange={handleChange}
        min={now}
        className="border rounded px-3 py-2"
        required
      />

      <input
        type="number"
        name="jugadores"
        placeholder="Cantidad de jugadores"
        value={formData.jugadores}
        onChange={handleChange}
        min={1}
        max={7}
        className="border rounded px-3 py-2"
        required
      />
      <input
        type="string"
        name="categoria"
        placeholder="Categoria"
        value={formData.categoria}
        onChange={handleChange}
        className="border rounded px-3 py-2"
        required
      />

      <Button variant="primary" type="submit">
        Crear Partido
      </Button>
    </form>
  );
}
