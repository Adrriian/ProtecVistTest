import '../style.css'

export const changePassword = function goChangePassword(){
    return` <div class="container flex min-h-screen items-center justify-center ">
        <div class="w-80% flex flex-col  gap-8 m-4">
            <h1 class="text-4xl font-bold text-center text-blue-700 dark:text-white">Redefinir Senha</h1>
            <div class="flex flex-col gap-4 justify-center">
                <div class="flex flex-col  gap-2">
                    <label for="email" class="text-2xl text-blue-700 font-bold dark:text-white">Email</label>
                    <input id ="email" class="email p-1 text-slate-900 placeholder:text-slate-900 bg-white border-4 rounded outline-0 border-blue-700 font-bold" for="email" type="text" placeholder="Digite seu Email" required>
                </div>
            </div>
            <div class="flex flex-col gap-2 ">
                <a class="btn bg-blue-700 rounded text-center p-2 cursor-pointer font-bold text-white">Redefinir Senha</a>
            </div>
        </div>
</div>

`
}
