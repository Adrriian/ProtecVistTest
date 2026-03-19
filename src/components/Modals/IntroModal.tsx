export default function IntroModal({ setEtapa }: any) {
  return (
    <div className="p-5 text-center">
      <h1 className="text-xl font-bold mb-4">Instruções</h1>

      <button
        onClick={() => setEtapa("tipo")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Começar
      </button>
    </div>
  );
}