import '../style.css';

export const dashBord = function plate(){
    return `
    <div class="container flex dark:bg-slate-950">
            <div id="menuArea" class="w-15 h-screen overflow-hidden gap-10 p-2 dark:bg-slate-800 z-2 transition-all duration-500 ease-linear  fixed ">
                <div id="menu" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 stroke-blue-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <h1 id="link" class="text-sm dark:text-blue-700 font-bold ml-15 cursor-pointer">Gerar Link Vistoria<h1>
            </div>
            <div class="w-full h-screen dark:bg-slate-950 z-1 ml-15">
                <div class="p-5 flex flex-col gap-10">
                    <h1 class="font-bold text-2xl dark:text-white ">Olá Adrian</h1>
                    <div class="flex flex-col dark:bg-white rounded p-3 gap-10 ">
                        <div class="flex gap-2 flex-col sm:flex-row sm:items-center sm:gap-5">
                            <h1 class="font-bold text-2xl dark:text-slate-950">DashBord</h1>
                            <div class="flex  items-center gap-2 flex-row sm:items-center sm:gap-2">
                                <input id="senha" class="z-1 p-1 w-40 border-blue-700 text-slate-700 placeholder:text-slate-700 placeholder:text-sm dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white rounded border-2 outline-0 dark:border-blue-700  font-bold" type="text" placeholder="Digite a Placa" >
                                <div class="dark:bg-slate-950 rounded p-1 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 dark:stroke-blue-700">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="h-100 overflow-y-scroll   flex flex-col">
                            <table class="flex flex-col gap-4">
                                <thead>
                                    <tr class="grid grid-cols-2 text-left border-b-1 border-gray-500 sm:grid-cols-4">
                                        <th class="text-sm">Nome</th>
                                        <th class="hidden sm:flex">Telefone</th>
                                        <th class="hidden sm:flex">Placa</th>
                                        <th  class="text-sm">Status</th>
                                    </tr>
                                </thead>
                                <tbody class="flex flex-col gap-5">
                                    <tr class="grid grid-cols-2 gap-1 border-b-1 border-gray-500 sm:grid-cols-4 sm:p-2 " >
                                        <td class="col-start-1 text-sm dark:text-blue-700 font-bold sm:col-auto">Adrian Raul Ribeiro</td>
                                        <td class="col-start-1 text-sm dark:text-blue-700 font-bold sm:col-auto">47991076484</td>
                                        <td class="col-start-1 text-sm dark:text-blue-700 font-bold sm:col-auto">MLR5B18</td>
                                        <td class="col-start-2 text-sm dark:text-blue-700 font-bold row-start-2 sm:row-auto sm:col-auto">
                                            <select id="select" class="500  text-sm border-2 rounded outline-0 font-bold dark:border-blue-700 dark:text-blue-700">
                                                 <option value='selecione' class="bg-white text-blue-700  font-bold text-sm">Selecione</option>
                                                <option value='pendente' class="text-white bg-yellow-500  font-bold text-sm">Pendente</option>
                                                <option  value='feito' class="text-white  bg-green-600 font-bold text-sm">Feito</option>
                                                <option value='cancelado' class="text-white  bg-red-700 font-bold text-sm">Cancelado</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr class="grid grid-cols-2 gap-1 border-b-1 border-gray-500 sm:grid-cols-4 sm:p-2 " >
                                        <td class="col-start-1 text-sm dark:text-blue-700 font-bold sm:col-auto">Maicon</td>
                                        <td class="col-start-1 text-sm dark:text-blue-700 font-bold sm:col-auto">47991268791</td>
                                        <td class="col-start-1 text-sm dark:text-blue-700 font-bold sm:col-auto">MCL8B19</td>
                                        <td class="col-start-2 text-sm dark:text-blue-700 font-bold row-start-2 sm:row-auto sm:col-auto">
                                            <select class="text-sm border-2 rounded outline-0 font-bold dark:border-blue-700 dark:text-blue-700">
                                                <option class="text-blue-700 font-bold text-sm">Pendente</option>
                                                <option class="text-blue-700 font-bold text-sm">Feito</option>
                                                <option class="text-blue-700 font-bold text-sm">Cancelado</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div
                    </div>
                </div>
            </div>
    </div>
`
}
