import { useNavigate } from "react-router-dom";
import { Trocartema } from "../../components/thema.Mode";
import { getId, menu, navigateToRegister, navigateToUserSettings, showDados,close, navigateToUserClientes } from "../../util/dashbordFuntion";
import { auth } from "../../config/firebase.config";
import { useEffect, useState } from "react";
import { buscarDadosDoUsuario } from "../../util/configUserFunction";
import type { User } from "../../types/users";
import { atulizarTheme } from "../../util/themeLocalStorage";

export function Dashboard() {
    showDados()
    getId()
    atulizarTheme()
    const user = auth.currentUser
    if (!user) {
        console.log("Nenhum usuário logado.");
        return null;
    }

    console.log("Usuário logado:", user);
     const [usuario, setUsuario] = useState<User>({
        name: "",
        email: "",
        telefone: ""
      })
       useEffect(() => {
    
        async function carregarUsuario() {
    
          const dados = await buscarDadosDoUsuario()
    
          if (dados) {
            setUsuario(dados)
          }
    
        }
    
        carregarUsuario()
    
      }, [])
    const navigate = useNavigate()
    return (
        <>
            <div className="container md:min-h-full lg:flex lg:min-h-full area_blur ">
                <header id="bar" className="min-h-full  bg-slate-900 z-99 absolute p-5 w-0 -ml-10 overflow-hidden transition-all ease-linear duration-500 lg:flex lg:flex-col lg:static lg:w-85 lg:min-h-screen lg:ml-0">
                    <nav>
                        <div className="flex items-center border-b border-gray-400 pb-4 gap-5 ml-10">
                            <div className="flex items-center bg-blue-700 p-2 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                                </svg>
                            </div>
                            <div>
                                <h1 className="font-bold text-white text-xl ">ProtecVist </h1>
                                <h1 className="text-white text-sm">Sistema De Vistorias</h1>
                            </div>
                            <div onClick={close} id="closes" className="cursor-pointer lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-5 ml-10 flex flex-col gap-5">
                            <div onClick={() => navigateToRegister(navigate)} className="bg-blue-700 p-2 rounded flex gap-2 cursor-pointer transition-all duration-300 hover:bg-violet-700 ease-linear hover:shadow-[0_0_20px_blue]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>
                                <h1  id="link" className="cursor-pointer font-bold text-white ">Cadastrar Vistoria</h1>
                            </div>
                            <div onClick={() => navigateToUserClientes(navigate)} className="bg-blue-700 p-2 rounded flex gap-2 cursor-pointer transition-all duration-300  hover:bg-violet-700 hover:shadow-[0_0_20px_blue] ease-linear">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <h1  id="link" className="cursor-pointer font-bold text-white ">Associados</h1>
                            </div>
                            <div onClick={() => navigateToUserSettings(navigate)} className="bg-blue-700 p-2 rounded flex gap-2 cursor-pointer transition-all duration-300  hover:bg-violet-700 hover:shadow-[0_0_20px_blue] ease-linear">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 stroke-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>

                                <h1  id="link" className="cursor-pointer font-bold text-white ">Configurações</h1>
                            </div>
                        </div>
                    </nav>
                </header>
                <div id="bluer" className="p-5 z-0 md:z-1 lg:z-1 transition-all ease-linear duration-500 w-full">
                    <div className="p-5 flex flex-col gap-5 sm:grid sm:grid-cols-2  border-b-2  dark:border-white m-5">
                        <div className="flex gap-5 items-center  ">
                            <div onClick={menu} id="menuarea">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 cursor-pointer dark:stroke-white lg:hidden ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <div>
                                <div className="flex items-center justify-center gap-4">
                                    <h1 className="text-slate-950 text-[12px] sm:text-sm md:text-xl font-bold dark:text-white">DashBord De Vistorias</h1>
                                    <Trocartema />
                                </div>

                                <div className="flex gap-1 items-center">
                                    <h1 className="dark:text-white text-[12px] text-slate-800">Olá,</h1>
                                    <h1 className="text-slate-850 dark:text-white text-[12px] sm:text-sm md:text-xl font-bold">{usuario?.name}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-5">
                        <h1 className="dark:text-white text-slate-800 font-bold text-2xl">Lista de Vistorias:</h1>
                        <div id="showDiv" className="flex flex-col gap-5 mt-5 sm:grid sm:grid-cols-2 md:grid-cols-3 ">
                            
                        </div>
                    </div>
                </div>
                <dialog id="modal" className="min-w-full min-h-full outline-0 bg-black/50 backdrop-blur-sm items-center justify-center">

            </dialog>
            </div>
            
        </>
    )
}
