import { useState } from "react";

export function ThemaChangeMode() {
  const root = document.querySelector('#root') as HTMLDivElement
  const [tema, setTema] = useState("light");

  function alterarTema(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === 'Ligth') {
      setTema('Ligth')
      localStorage.setItem('tema', 'Ligth')
      root.classList.remove('dark')
    } else {
      setTema('Dark')
      localStorage.setItem('tema', 'Dark')
      root.classList.add('dark')
    }

  }




  return (
    <div className="mb-6">
      <label className="block text-sm mb-2 text-slate-600 dark:text-slate-300">
        Tema
      </label>

      <select value={tema} onChange={alterarTema}
        className="p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
      >   <option value={'Ligth'}>Ligth</option>
        <option value={'Dark'}>Dark</option>

      </select>
    </div>
  )
}