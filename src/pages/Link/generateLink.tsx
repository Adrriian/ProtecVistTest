
import { navigateToDashbord } from "../../services/fuctionNavigates";
import { changePlate, Register } from "../../services/registerFunction";
import { atulizarTheme } from "../../services/themeLocalStorage";

export function RegisterUser() {
    atulizarTheme()

    return (
        <div className="container flex min-h-screen items-center justify-center ">
            <div className="w-4/5 flex flex-col  gap-4 m-4 bg-slate-900 p-7 rounded-2xl max-w-sm">
            
                <div className="flex items-center justify-center gap-3">
                    <div className="bg-white rounded-full p-2 cursor-pointer" onClick={navigateToDashbord}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-violet-700">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>
                    </div>
                    <h1 className="font-bold text-center text-blue-700 dark:text-white text-xl">Gerar Link de Vistoria</h1>
                    
                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <div className="flex flex-col  gap-2">
                        <label htmlFor="name" className="text-xl text-blue-700 font-bold dark:text-white">Nome</label>
                        <input id='name' className=" p-1 border-blue-700  text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 bg-white border-4 rounded outline-0 dark:border-blue-700 font-bold" type="text" placeholder="Digite o Nome" />
                    </div>
                    <div className="flex flex-col   gap-2 " >
                        <label htmlFor="plate" className="text-xl text-blue-700 font-bold dark:text-white">Placa</label>
                        <input onInput={changePlate} id="plate" className="z-1 p-1 w-full border-blue-700 text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 bg-white rounded border-4 outline-0 dark:border-blue-700  font-bold" type="Text" placeholder="Digite a Placa" />
                    </div>
                    <div className="flex flex-col   gap-2 " >
                        <label htmlFor="telefone" className="text-xl text-blue-700 font-bold dark:text-white">Telefone</label>
                        <input id="telefone" className="z-1 p-1 w-full border-blue-700 text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 bg-white rounded border-4 outline-0 dark:border-blue-700  font-bold" type="number" placeholder="Digite o telefone (Ex:47988225533)" />
                    </div>
                </div>
                <div onClick={Register} className="flex flex-col cursor-pointer bg-blue-700 rounded text-center p-2  hover:bg-violet-700 ease-linear  gap-2 transition-all duration-300 hover:shadow-[0_0_20px_blue] ">
                    <a id="gerarLink" className=" text-white  font-bold dark:text-white">Gerar Link</a>
                </div>
            </div>
        </div>
    )
}
