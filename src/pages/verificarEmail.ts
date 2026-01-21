import '../style.css'

export const emailPage = function checkEmailPage(){
    return` 
        <div class="container flex min-h-screen items-center justify-center ">
        <div class="w-80% flex flex-col  gap-8 m-4">
            <h1 class="text-4xl font-bold text-center text-blue-700 dark:text-white">Verificação de Email</h1>
            <div class="flex flex-col gap-4 justify-center">
                <div class="flex flex-col  gap-2">
                    <label for="email" class="text-2xl text-blue-700 font-bold dark:text-white">Email</label>
                    <input id='email' class=" p-1 border-blue-700  text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 dark:bg-white border-4 rounded outline-0 dark:border-blue-700 font-bold" for="email" type="email" placeholder="Digite o Email" >
                </div>
            </div>
            <div class="flex flex-col gap-2 ">
                <a id="goEmail" class=" text-white bg-blue-700 dark:bg-blue-700 rounded text-center p-2 cursor-pointer font-bold dark:text-white">Enviar Email</a>
            </div>
        </div>
    </div>
`
}
