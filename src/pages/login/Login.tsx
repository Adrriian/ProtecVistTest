import { Trocartema } from "../../components/thema.Mode";
import { useState } from "react"
import { changePassword, login, loginGO } from "../../util/functionLogin";
import { useNavigate } from "react-router-dom";
import { atulizarTheme } from "../../util/themeLocalStorage";

export default function PageLogin() {
  atulizarTheme()
const [mostrarSenha, setMostrarSenha] = useState(false)

function changeType() {
    setMostrarSenha(!mostrarSenha)
}
 const navigate = useNavigate()

  return (
    <div className="container flex min-h-screen items-center justify-center  ">
      <div className="w-4/5 flex flex-col  gap-8 m-4 max-w-md bg-slate-900 p-5 rounded-2xl">
        <div className="flex gap-5 items-center justify-center">
          <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-white">Auto Vistoria</h1>
          <Trocartema />
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex flex-col  gap-2">
            <label htmlFor="email" className="text-2xl text-blue-700 font-bold dark:text-white">Email</label>
            <input id='email' className=" p-1 border-blue-700  text-slate-700 placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 bg-white border-4 rounded outline-0 dark:border-blue-700 font-bold" type="text" placeholder="Digite seu Email" />
          </div>
          <div className="flex flex-col   gap-2 " >
            <label htmlFor="senha" className="text-2xl text-blue-700 font-bold dark:text-white">Senha</label>
            <div className='flex items-center justify-end'>
              <input id="senha"  className="z-1 p-1 w-full border-blue-700  placeholder:text-slate-700 dark:text-slate-900 dark:placeholder:text-slate-900 bg-white rounded border-4 outline-0 dark:border-blue-700  font-bold" type={mostrarSenha ? "text" : "password"} placeholder="Digite sua Senha" />
              <div id="openClose" onClick={changeType} className="z-1 absolute cursor-pointer p-5 ">
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6  dark:stroke-slate-900">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <button onClick={()=> login(navigate)} id="login" className=" text-white bg-blue-700 dark:bg-blue-700 rounded text-center p-2 cursor-pointer font-bold dark:text-white hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0_0_20px_blue]">Logar</button>
          <button onClick={() => loginGO(navigate)} id="loginGo" className=" text-white bg-blue-700 dark:bg-blue-700 rounded text-center p-2 cursor-pointer font-bold dark:text-white hover:bg-violet-700 transition-all duration-300 ease-linear hover:shadow-[0_0_20px_blue]">Logar Com o Gogle</button>
          <button onClick={() => changePassword(navigate)} id="gochangePassword" className="text-blue-700 underline dark:text-blue-700 font-bold cursor-pointer" >Esqueceu a Senha?</button>
        </div>
      </div>
    </div>
  )
}
