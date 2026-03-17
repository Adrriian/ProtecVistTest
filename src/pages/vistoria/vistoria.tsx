import { atulizarTheme } from "../../util/themeLocalStorage"

export function Vistoria(){
  atulizarTheme()
  return(
    <div>
      <h1 className="dark:text-white text-black">Ola meu lidão</h1>
    </div>
  )
}