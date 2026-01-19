import '../style.css';

export const login = function loginShow(){
    return `<div class="container flex min-h-screen items-center justify-center ">
        <div class="w-80% flex flex-col  gap-8 m-4">
            <h1 class="text-4xl font-bold text-center text-blue-700 dark:text-white">ProtecVist</h1>
            <div class="flex flex-col gap-4 justify-center">
                <div class="flex flex-col  gap-2">
                    <label for="email" class="text-2xl text-blue-700 font-bold dark:text-white">Email</label>
                    <input id='email' class=" p-1 border-blue-700  text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white border-4 rounded outline-0 dark:border-blue-700 font-bold" for="email" type="text" placeholder="Digite seu Email" >
                </div>
                <div class="flex flex-col   gap-2 " >
                    <label for="senha" class="text-2xl text-blue-700 font-bold dark:text-white">Senha</label>
                    <div class='flex items-center justify-end'>
                        <input id="senha" class="z-1 p-1 w-full border-blue-700 text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white rounded border-4 outline-0 dark:border-blue-700  font-bold" type="password" placeholder="Digite sua Senha" >
                        <div id="openClose" class="z-1 fixed cursor-pointer p-5 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 ">
                <a id="login" class=" text-white bg-blue-700 dark:bg-blue-700 rounded text-center p-2 cursor-pointer font-bold dark:text-white">Logar</a>
                <a id="gochangePassword" class="text-blue-700 underline dark:text-blue-700 font-bold cursor-pointer" >Esqueceu a Senha?</a>
                <h1 class="dark:text-white text-blue-700">Não está Cadastrado no sistema? <a id ="goRegister" class="dark:text-blue-700 text-slate-950 cursor-pointer font-bold">CLIQUE AQUI</a></h1>
            </div>
        </div>
    </div>
`
}