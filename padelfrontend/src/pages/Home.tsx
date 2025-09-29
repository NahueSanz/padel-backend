import pala from "../assets/raqueta-de-padel.png";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        Bienvenido a Padel App 
        <img src={pala} alt="Pala de pádel" className="w-8 h-8 inline-block" />
      </h1>
      <p className="mt-4">Conectá con jugadores y canchas cerca tuyo.</p>
    </div>
  );
}
