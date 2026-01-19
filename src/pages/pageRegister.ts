import '../style.css';

export const register = function resgiterNow(){
    return ` <div class="container  flex min-h-screen items-center justify-center ">
        <div class=" flex w-100 flex-col gap-8 m-4">
            <h1 class="text-4xl font-bold text-center text-blue-700 dark:text-white">Faça seu Cadastro</h1>
            <div class="flex flex-col gap-4 justify-center">
                <div class="flex flex-col  gap-2">
                    <label for="email" class="text-xl font-bold text-blue-700 dark:text-white">Email:</label>
                    <input class=" p-1 text-slate-900 placeholder:text-slate-900 bg-white border-4 rounded outline-0 border-blue-700 font-bold" id="email" type="text" placeholder="Digite seu Email" required>
                </div>
                 <div class="flex flex-col   gap-2 " >
                    <label for="tel" class="text-xl font-bold text-blue-700 dark:text-white">Telefone:</label>
                    <input class=" p-1 text-slate-900 placeholder:text-slate-900 bg-white rounded border-4 outline-0 border-blue-700  font-bold" id="tel" type="text" placeholder="Digite seu Telefone" required>
                </div>
                <div class="flex flex-col   gap-2 " >
                    <label for="senha" class="text-xl font-bold text-blue-700 dark:text-white">Senha:</label>
                    <input class=" p-1 text-slate-900 placeholder:text-slate-900 bg-white rounded border-4 outline-0 border-blue-700  font-bold" id="senha" type="text" placeholder="Crie sua Senha" required>
                </div>
                <div class="flex flex-col   gap-2 " >
                    <label for="confSenha" class="text-xl font-bold text-blue-700 dark:text-white">Confirme sua Senha:</label>
                    <input class=" p-1 text-slate-900 placeholder:text-slate-900 bg-white rounded border-4 outline-0 border-blue-700  font-bold" id="confSenha" type="text" placeholder="Confirme sua Senha" required>
                </div>
               
            </div>
            <div class="flex flex-col gap-2 ">
                <a class="bg-blue-700 rounded text-center p-2 cursor-pointer font-bold text-white">Cadastrar</a>
            </div>
        </div>
    </div>
`}