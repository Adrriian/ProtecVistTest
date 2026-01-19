import '../style.css';

export const link = function gerarLink(){
    return `<div class="container flex min-h-screen items-center justify-center ">
        <div class="w-80% flex flex-col  gap-8 m-4">
            <h1 class="text-4xl font-bold text-center text-blue-700 dark:text-white">Gerar Link de Vistoria</h1>
            <div class="flex flex-col gap-4 justify-center">
                <div class="flex flex-col  gap-2">
                    <label for="name" class="text-2xl text-blue-700 font-bold dark:text-white">Nome</label>
                    <input id='name' class=" p-1 border-blue-700  text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white border-4 rounded outline-0 dark:border-blue-700 font-bold" for="email" type="text" placeholder="Digite o Nome" >
                </div>
                <div class="flex flex-col   gap-2 " >
                    <label for="plate" class="text-2xl text-blue-700 font-bold dark:text-white">Senha</label>
                    <input id="plate" class="z-1 p-1 w-full border-blue-700 text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white rounded border-4 outline-0 dark:border-blue-700  font-bold" type="password" placeholder="Digite a Placa" >
                </div>
                <div class="flex flex-col   gap-2 " >
                    <label for="telefone" class="text-2xl text-blue-700 font-bold dark:text-white">Telefone</label>
                    <input id="telefone" class="z-1 p-1 w-full border-blue-700 text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white rounded border-4 outline-0 dark:border-blue-700  font-bold" type="password" placeholder="Digite o telefone" >
                </div>
            </div>
            <div class="flex flex-col gap-2 ">
                <a id="gerarLink" class=" text-white bg-blue-700 dark:bg-blue-700 rounded text-center p-2 cursor-pointer font-bold dark:text-white">Gerar Link</a>
            </div>
        </div>
    </div>
`
}