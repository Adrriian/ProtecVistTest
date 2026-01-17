import '../style.css';

export const login = function loginShow(){
    return `<div class="container flex min-h-screen items-center justify-center ">
        <div class="w-80% flex flex-col  gap-8 m-4">
            <h1 class="text-4xl font-bold text-center text-white">ProtecVist</h1>
            <div class="flex flex-col gap-4 justify-center">
                <div class="flex flex-col  gap-2">
                    <label for="email" class="text-2xl font-bold text-white">Email</label>
                    <input class=" p-1 text-slate-900 placeholder:text-slate-900 bg-white border-4 rounded outline-0 border-blue-700 font-bold" for="email" type="text" placeholder="Digite seu Email" required>
                </div>
                <div class="flex flex-col   gap-2 " >
                    <label for="senha" class="text-2xl font-bold text-white">Senha</label>
                    <input class=" p-1 text-slate-900 placeholder:text-slate-900 bg-white rounded border-4 outline-0 border-blue-700  font-bold" id="senha" type="text" placeholder="Digite seu Email" required>
                </div>
            </div>
            <div class="flex flex-col gap-2 ">
                <a id="login" class="bg-blue-700 rounded text-center p-2 cursor-pointer font-bold text-white">Logar</a>
                <a id="gochangePassword" class="underline text-blue-700 font-bold cursor-pointer" >Esqueceu a Senha?</a>
                <h1 class="text-white">Não está Cadastrado no sistema? <a id ="goRegister" class="text-blue-700 cursor-pointer font-bold">CLIQUE AQUI</a></h1>
            </div>
        </div>
    </div>
`
}