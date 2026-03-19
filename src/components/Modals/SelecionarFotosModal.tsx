
type Props = {
  getListaFotos: () => string[];
  fotosSelecionadas: string[];
  setFotosSelecionadas: (fotos: string[]) => void;
  setEtapa: (etapa: any) => void;
  voltar:any
};

export function SelecionarFotosModal({
  getListaFotos,
  fotosSelecionadas,
  setFotosSelecionadas,
  setEtapa,
  voltar,
}: Props) {
  const listaFotos = getListaFotos();

  function toggleFoto(foto: string) {
    if (fotosSelecionadas.includes(foto)) {
      setFotosSelecionadas(fotosSelecionadas.filter((f) => f !== foto));
    } else {
      setFotosSelecionadas([...fotosSelecionadas, foto]);
    }
  }

  function iniciarVistoria() {
    if (fotosSelecionadas.length === 0) {
      alert("Selecione pelo menos uma foto");
      return;
    }

    setEtapa("guia");
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-5 shadow-lg">

        {/* Título */}
        <div className="flex gap-2 items-center justify-center mb-5">
        <button className="bg-slate-800 rounded-full p-2 cursor-pointer" onClick={voltar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-violet-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
        <h2 className="text-xl font-bold text-center">
          Selecionar Fotos
        </h2>
        </div>

        {/* Lista */}
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {listaFotos.map((foto) => {
            const selecionado = fotosSelecionadas.includes(foto);

            return (
              <div
                key={foto}
                onClick={() => toggleFoto(foto)}
                className={`p-3 rounded-xl border cursor-pointer transition
                  ${
                    selecionado
                      ? "bg-green-100 border-green-500"
                      : "bg-gray-100 border-gray-300"
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{foto}</span>

                  {selecionado && (
                    <span className="text-green-600 font-bold">✔</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão */}
        <button
          onClick={iniciarVistoria}
          className="w-full mt-5 bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition"
        >
          Iniciar Vistoria
        </button>
      </div>
    </div>
  );
}