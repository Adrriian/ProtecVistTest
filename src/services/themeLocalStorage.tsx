export function atulizarTheme(){
      const root = document.querySelector('#root') as HTMLDivElement
        const temaSalvo = localStorage.getItem("tema")
    
        if(temaSalvo === 'dark'){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }
}