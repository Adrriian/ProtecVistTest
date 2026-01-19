import '../style.css';

export const login = function loginShow(){
    return `<div class="container flex min-h-screen items-center justify-center ">
        <div class="w-80% flex flex-col  gap-8 m-4">
            <h1 class="text-4xl font-bold text-center text-blue-700 dark:text-white">ProtecVist</h1>
            <div class="flex flex-col gap-4 justify-center">
                <div class="flex flex-col  gap-2">
                    <label for="email" class="text-2xl text-blue-700 font-bold dark:text-white">Email</label>
                    <input class=" p-1 border-blue-700  text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white border-4 rounded outline-0 dark:border-blue-700 font-bold" for="email" type="text" placeholder="Digite seu Email" required>
                </div>
                <div class="flex flex-col   gap-2 " >
                    <label for="senha" class="text-2xl text-blue-700 font-bold dark:text-white">Senha</label>
                    <input class=" p-1 border-blue-700 text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white rounded border-4 outline-0 dark:border-blue-700  font-bold" id="senha" type="text" placeholder="Digite seu Email" required>
                </div>
            </div>
            <div class="flex flex-col gap-2 ">
                <a id="login" class="text-white bg-blue-700 dark:bg-blue-700 rounded text-center p-2 cursor-pointer font-bold dark:text-white">Logar</a>
                <a id="gochangePassword" class="text-blue-700 underline dark:text-blue-700 font-bold cursor-pointer" >Esqueceu a Senha?</a>
                <h1 class="dark:text-white text-blue-700">Não está Cadastrado no sistema? <a id ="goRegister" class="dark:text-blue-700 text-slate-950 cursor-pointer font-bold">CLIQUE AQUI</a></h1>
            </div>
        </div>
    </div>
`
}