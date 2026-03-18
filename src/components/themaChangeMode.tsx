import { useEffect, useState } from "react";

export function ThemaChangeMode() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem("tema") || "light";
  });

  useEffect(() => {
   const root = document.querySelector('#root') as HTMLDivElement

    if (tema === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("tema", tema);
  }, [tema]);

  function alterarTema(event: React.ChangeEvent<HTMLSelectElement>) {
    setTema(event.target.value);
  }

  return (
    <div className="mb-6">
      <label className="block text-sm mb-2 text-slate-600 dark:text-slate-300">
        Tema
      </label>

      <select
        value={tema}
        onChange={alterarTema}
        className="p-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}