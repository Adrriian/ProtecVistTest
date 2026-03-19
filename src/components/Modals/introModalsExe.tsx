import { atulizarTheme } from "../../services/themeLocalStorage";


export function IntroModal({ setEtapa }: any) {
  atulizarTheme()
  
  return (
    <div className="container min-w-screen min-h-screen flex items-center justify-center bg-black/60 text-center  ">
      <div className="flex flex-col items-center justify-center bg-slate-800 dark:bg-white p-5 rounded-xl w-75">
        <div>
          <h1 className="text-white dark:text-violet-700 text-xl font-bold mb-4">Instruções:</h1>
          <p className="text-white dark:text-violet-700 text-xl mb-4 text-justify">Você está iniciando a vistoria do seu veículo. Ao acessar a câmera, tire as fotos com o celular na posição horizontal (deitado) para garantir melhor enquadramento e qualidade das imagens.</p>
        
        </div>
        <div className="flex items-center justify-center gap-20">
          <div>
            <h1 className="text-green-700 font-bold">Correto:</h1>
            <img className="w-20" src="../../../public/icons/correto.png" alt="correto" />
          </div>

          <div>
            <h1 className="text-red-700 font-bold">Errado:</h1>
            <img className="w-20" src="../../../public/icons/errado.png" alt="correto" />
          </div>
        </div>

        <button
          onClick={() => setEtapa("tipo")}
          className="bg-blue-700 text-white px-4 py-2 rounded cursor-pointer hover:px-5 hover:py-3 hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0px_0px_10px_blue]"
        >
          Começar Vistoria
        </button>
      </div>

    </div>
  );
}