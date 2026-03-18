import { Trocartema } from "../../components/thema.Mode";
import { changePassword } from "../../services/changeFunctionPassword";
import { atulizarTheme } from "../../services/themeLocalStorage";

export function ChangePassword() {
   atulizarTheme()
  return (
      <div className="container flex min-h-screen items-center justify-center  ">
          <div className="flex flex-col  gap-8 m-4 bg-slate-950 p-8 rounded-2xl">
            <div className="flex items-center justify-center gap-3">
                 <h1 className="text-xl font-bold text-center text-white ">Redefinir Senha</h1>
                 <Trocartema/>
            </div>
             
              <div className="flex flex-col gap-4 justify-center">
                  <div className="flex flex-col  gap-2">
                      <label htmlFor="email" className="text-2xl text-white font-bold">Email</label>
                      <input id="email" className="email p-1 font text-slate-900 placeholder:text-slate-900 bg-white border-4 rounded outline-0 border-blue-700 font-bold" type="text" placeholder="Digite seu Email" />
                  </div>
              </div>
              <div onClick={changePassword} className="flex flex-col gap-2 bg-blue-700 p-3 text-center cursor-pointer rounded hover:shadow-[0_0_20px_blue] hover:bg-violet-700 transition-all duration-300 ease-linear">
                  <a className="btn  font-bold text-white">Redefinir Senha</a>
              </div>
          </div>
      </div>
  )
}
