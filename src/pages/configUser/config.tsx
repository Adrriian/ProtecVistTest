
import { useEffect, useState } from "react";
import { ThemaChangeMode } from "../../components/themaChangeMode";
import { auth } from "../../config/firebase.config";
import { buscarDadosDoUsuario } from "../../services/configUserFunction";
import { atualizarDadosDoUsuario } from "../../services/configUserFunction"
import type { User } from "../../types/users";
import { atulizarTheme } from "../../services/themeLocalStorage";
import { navigateToDashbord } from "../../services/fuctionNavigates";
import { useNavigate } from "react-router-dom";

export function UserSettings() {
  atulizarTheme()
  const user = auth.currentUser
  if (!user) {
    console.log("Nenhum usuário logado.");
    return null;
  }


  const [usuario, setUsuario] = useState<User>({
    name: "",
    email: "",
    telefone: ""
  })
  useEffect(() => {

    async function carregarUsuario() {

      const dados = await buscarDadosDoUsuario()

      if (dados) {
        setUsuario(dados)
      }

    }

    carregarUsuario()

  }, [])

  async function salvar() {
    await atualizarDadosDoUsuario(usuario)
  }

 const navigate = useNavigate()

  return (

    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="flex flex-col w-4/5 max-w-md bg-slate-900 rounded-2xl shadow-xl md:flex-row ">



        {/* LADO DIREITO */}
        <div className="flex-1 p-8 ">

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="bg-white rounded-full p-2 cursor-pointer" onClick={()=>navigateToDashbord(navigate)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 stroke-violet-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold   text-white">
              Configurações do Usuário
            </h1>
            
          </div>


          {/* NOME */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">
              Nome
            </label>

            <input id="name"
              value={usuario?.name}
              placeholder="Digite Seu Nome"
              onChange={(e) => setUsuario({ ...usuario, name: e.target.value })}
              type="text"
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
            />
          </div>

          {/* EMAIL */}


          {/* SENHA */}

          <div className="mb-6">
            <label className="block text-sm mb-1 text-slate-600 dark:text-slate-300">
              Telefone
            </label>

            <input id="number"
              value={usuario?.telefone}
              onChange={(e) => setUsuario({ ...usuario, telefone: e.target.value })}
              type="number"
              placeholder="Digite Seu Telefone"
              className="w-full p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
            />
          </div>

          {/* TEMA */}
          <ThemaChangeMode />

          {/* BOTÃO */}
          <button
            onClick={salvar}
            className="w-full bg-blue-600 transition-all duration-300  hover:bg-violet-700  ease-linear hover:shadow-[0_0_20px_blue] cursor-pointer text-white p-3 rounded-lg font-semibold "
          >
            Salvar Alterações
          </button>

        </div>

      </div>

    </div>
  );
}