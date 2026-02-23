import '../style.css';


export const dashBord = function plate(){
    return `
       
    <div class="container m-auto lg:flex lg:min-h-full area_blur ">
        <div id="bar" class="min-h-full  bg-slate-900 z-99 absolute p-5 w-0 -ml-10 overflow-hidden transition-all ease-linear duration-500 lg:flex lg:flex-col lg:static lg:w-85 lg:min-h-screen lg:ml-0">
            <div class="flex items-center border-b border-gray-400 pb-4 gap-5 ml-10">
                <div  class="flex items-center bg-blue-700 p-2 rounded">    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>   
                </div>
                <div>
                    <h1 class="font-bold text-white text-xl ">ProtecVist </h1>
                    <h1 class="text-white text-sm">Sistema De Vistorias</h1>
                </div>
                <div id="closes" class="cursor-pointer lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div class="mt-5 ml-10 ">
                <div class="bg-blue-700 p-2 rounded flex gap-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_blue]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                    <h1 id="link" class="cursor-pointer font-bold text-white ">Cadastrar Cliente<h1>
                </div>
            </div>
        </div>
        <div id="bluer" class="p-5 z-0 md:z-0 lg:z-1 transition-all ease-linear duration-500">
            <div class="p-5 flex flex-col gap-5 sm:grid sm:grid-cols-2  border-b-2  dark:border-white m-5">
                <div class="flex gap-5 items-center  ">
                    <div id="menuarea">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 cursor-pointer dark:stroke-white lg:hidden ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-slate-800 text-3xl font-bold dark:text-white">DashBord</h1>
                        <div class="flex gap-1 items-center">
                            <h1 class="dark:text-white text-lg text-blue-900">Olá,<h1>
                            <h1 class="text-blue-700 text-16 font-bold">Adrian Ribeiro</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <input class="border-2 border-blue-700 text-blue-700 outline-0 bg-blue-50 font-bold placeholder-bold placeholder-blue-700 rounded p-1 dark:bg-white sm:w-full lg:w-100" type="text"placeholder="Buscar Cliente">
                </div>
            </div>
            <div class="flex items-center bg-blue-900 rounded w-full p-5 gap-5 mb-5 ">
                <div class="flex flex-col m-auto  gap-10 sm:grid sm:grid-cols-2 md:grid-cols-4 md:justify-center md:items-center md:m-auto lg:grid-cols-2 ">
                    <div class="flex gap-5 items-center  border-b  border-white pb-5 sm:border-b-0 sm:border-r   sm:items-start sm:pb-0 sm:pr-5 md:flex-col lg:flex-row">
                        <div class="flex  bg-slate-900/80 rounded p-2 justify-center items-center w-10 h-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </div>
                        <div class=""md:flex md:gap-2 md:flex-col">
                            <h1 class="text-white text-sm lg:text-xl">Total de Clientes</h1>
                            <h1 class="text-white font-bold text-xl lg:text-2xl">10</h1>
                        </div>
                    </div>
                    <div class="flex gap-5 items-center border-b border-white pb-5 sm:border-b-0  sm:items-start sm:pb-0 sm:pr-5 md:flex-col md:border-r lg:flex-row lg:border-0" >
                        <div class="flex bg-green-600/80 rounded p-2 justify-center items-center w-10 h-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </div>
                        <div class=""md:flex md:gap-2 md:flex-col">
                            <h1 class="text-white text-sm  lg:text-xl">Clientes Feito</h1>
                            <h1 class="text-white font-bold text-xl lg:text-2xl">5</h1>
                        </div>
                    </div>
                    <div class="flex gap-5 items-center border-b border-white pb-5 sm:border-b-0 sm:border-r  sm:items-start sm:pb-0 sm:pr-5 md:flex-col lg:flex-row" >
                        <div class="flex bg-yellow-400/80 rounded p-2 justify-center items-center w-10 h-10 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </div>
                        <div class=""md:flex md:gap-2 md:flex-col">
                            <h1 class="text-white  lg:text-xl">Clientes Pendentes</h1>
                            <h1 class="text-white font-bold text-xl lg:text-2xl">10</h1>
                        </div>
                    </div>
                    <div class="flex gap-5 items-center  sm:items-start md:flex-col lg:flex-row">
                        <div class="flex bg-red-700/80 rounded p-2 justify-center items-center w-10 h-10 sm:flex-col  ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                        </div>
                        <div class="md:flex md:gap-2 md:flex-col">
                            <h1 class="text-white text-sm  lg:text-xl">Clientes Cancelado</h1>
                            <h1 class="text-white font-bold text-xl lg:text-2xl">3</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    <h1 class="text-white font-bold text-2xl">Lista de Clientes:</h1>
                    <div id="showDiv" class="flex flex-col gap-5 mt-5 sm:grid sm:grid-cols-2 md:grid-cols-3 ">
                        
                    </div>
            </div> 
        </div>
        
    </div>
    <dialog id="modal" class="min-w-full min-h-full outline-0 bg-black/50 backdrop-blur-sm items-center justify-center">
        <div class="bg-slate-900 text-white rounded-2xl max-w-[90%] max-h-[90dvh] box-border overflow-y-scroll">
            <div class="w-full">
                <div class=" mt-5 ml-5 mr-5 flex items-center justify-between">
                    <h1>Nome do Cliente<h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 bg-white stroke-slate-900 rounded-2xl cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div class="border-b border-gray-300 mt-1"></div>
                <div class="flex flex-col justify-center gap-2 p-5">
                    <div class="flex items-center gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <h1>Dados do Cliente<h1> 
                    </div> 
                    <div class="grid grid-cols-1 bg-sky-900 rounded-xl p-5 gap-3 sm:grid-cols-2">
                        <div class="grid grid-cols-1 justify-center border-b border-gray-300 gap-2 p-1 sm:border-r-2 sm:border-b-0 md:grid-cols-2 md:border-r-0">
                            <div class="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <h1>Adrian Raul Ribeiro</h1>
                            </div>
                            <div class="flex gap-2 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <h1>47991076484</h1>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 justify-center gap-2 md:grid-cols-2">
                            <div class="flex gap-2 p-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <h1>MLR5B18</h1>
                            </div>
                            <div class="p-1 flex gap-2 items-center" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                <h1>Pendente</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-5 p-5">
                    <div class="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                        <h1>Fotos da Vistoria<h1>
                    </div>
                    <div class="grid grid-cols-1 overflow-y-scroll h-[30dvh] gap-3 p-4 sm:grid-cols-3 md:grid-cols-4 ">
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                        <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                         <div class="flex flex-col pb-2 items-center justify-between bg-sky-950 rounded-2xl">
                            <img class="rounded-tr-xl rounded-tl-xl" src="https://quatrorodas.abril.com.br/wp-content/uploads/2023/06/1FLP00991.jpg?quality=70&strip=info&w=1280&h=720&crop=1"/>
                            <h1 class="text-white" >Frente</h1>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-5 p-5">
                    <div class="flex items-center gap-2 bg-green-700/50 rounded-xl p-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-green-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <h1 class="text-white">Confirmar Vistoria</h1>
                    </div>
                    <div  class="flex items-center gap-2 bg-red-600/25 rounded-xl p-2 cursor-pointer" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                        <h1>Cancelar Vistoria</h1>
                    </div>
                </div>
            </div>
        </div>
    </dialog>
`
}
