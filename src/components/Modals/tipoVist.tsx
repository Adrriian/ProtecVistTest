export function TypoVist({
  setEtapa,
  escolherTipoVistoria,
  voltar,
}: any) {
  return (
    <div className="container min-w-screen min-h-screen flex items-center justify-center bg-black/60 text-center">
      <div className="flex flex-col items-center justify-center bg-slate-800 dark:bg-white p-5 rounded-xl w-75 gap-10">
        <div className="flex gap-2 items-center justify-center ">
          <button className="bg-slate-800 rounded-full p-2 " onClick={voltar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-violet-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          <h2 className="text-white dark:text-violet-700 text-md font-bold ">Escolha o Tipo de Vistoria</h2>
        </div>

        <div className="flex flex-col gap-5">
          <button
            onClick={() => {
              escolherTipoVistoria("completa");
              setEtapa("guia");
            }}
            className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:px-5 hover:py-3 hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]"
          >
            Completa
          </button>

          <button
            onClick={() => {
              escolherTipoVistoria("Parcial");
              setEtapa("selecionarFotos");
            }}
            className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:px-5 hover:py-3 hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]"
          >
            Parcial
          </button>

        </div>
      </div>

    </div>)
}