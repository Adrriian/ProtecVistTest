export default function FinalModal({ fotos }: any) {
  async function enviar() {
    console.log("Enviar para imgbb:", fotos);

    // aqui você faz upload
  }

  return (
    <div className="p-5 text-center">
      <h2 className="mb-4">Finalizar</h2>

      <p>{fotos.length} fotos capturadas</p>

      <button
        onClick={enviar}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Enviar
      </button>
    </div>
  );
}