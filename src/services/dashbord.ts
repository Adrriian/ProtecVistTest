import '../style.css'
import { renderRouter } from '../router/router'

export function menu(){
    let menuArea = document.querySelector('#bar') as HTMLDivElement
    let bluer = document.querySelector('#bluer') as HTMLDivElement
    
    if(menuArea.style.width !== "0px" ||menuArea.style.width === "0px" ){
        menuArea.style.width = '300px'
        bluer.style.filter = 'blur(5px)'
    }
}
export function close(){
   let menuArea = document.querySelector('#bar') as HTMLDivElement
    let bluer = document.querySelector('#bluer') as HTMLDivElement
    
    if(menuArea.style.width === "300px" ){
        menuArea.style.width = "0px"
         bluer.style.filter = 'blur(0px)'
         
    }
}

export function goGerarLink(){
    renderRouter('/link')
}
export function changeColor(){
    let select = document.querySelector('#select') as HTMLSelectElement
    let selectvalue = select.value
    
    switch(selectvalue){
        case 'pendente':
            select.style.background = "yellow"
            select.style.color = 'blue'
        break;
        case 'feito':
            select.style.background = "green"
            select.style.color = 'white'
        break;
        
        case 'cancelado':
            select.style.background = "red"
            select.style.color = 'white'
        break;
        default:
            select.style.background = "white"
            select.style.color = 'blue'
        break;
    }    

}