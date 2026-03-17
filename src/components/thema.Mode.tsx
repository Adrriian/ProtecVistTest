import { useState } from "react"

export function Trocartema() {
  const root = document.querySelector('#root') as HTMLDivElement
  const [tema, setTema] = useState('')

  function Trocartema() {
    if (tema === 'light') {
      setTema('dark')
      localStorage.setItem('tema', 'dark')
      root.classList.add('dark')
      console.log(localStorage)

    } else {
      setTema('light')
      localStorage.setItem('tema', 'light')
      root.classList.remove('dark')
      console.log(localStorage)
    }

  }

  return (
    <div className="bg-slate-800 dark:bg-white cursor-pointer rounded-3xl p-2  " onClick={Trocartema}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-violet-500 dark:stroke-violet-600">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    </div>
  )
}