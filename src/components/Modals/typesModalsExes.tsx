import { atulizarTheme } from "../../services/themeLocalStorage";


export function TypeModals({
  setEtapa,
  setTipoVeiculo,
}: any) {
  atulizarTheme();

  return (
    <div className="container min-w-screen min-h-screen flex items-center justify-center bg-black/60 text-center">
      <div className="flex flex-col items-center justify-center bg-slate-800 dark:bg-white p-5 rounded-xl w-75">


        <h2 className="text-white dark:text-violet-700 text-xl font-bold mb-4">
          Escolha o Tipo de veículo
        </h2>

        <div className="flex flex-col gap-5">

          {/* CARRO */}
          <button
            onClick={() => {
              setTipoVeiculo("carro");
              setEtapa("tipoVist");
            }}
            className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:px-5 hover:py-3 hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]"
          >
            Carro
          </button>

          {/* MOTO */}
          <button
            onClick={() => {
              setTipoVeiculo("moto");
              setEtapa("tipoVist");
            }}
            className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:px-5 hover:py-3 hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]"
          >
            Moto
          </button>

        </div>
      </div>
    </div>
  );
}