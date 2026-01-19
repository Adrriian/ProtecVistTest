import '../style.css'
import { renderRouter } from '../router/router'

export function menu(){
    let menuArea = document.querySelector('#menuArea') as HTMLDivElement

    if(menuArea.style.width === "320px"){
        menuArea.style.width = "40px"
    }else{
        menuArea.style.width = '320px'
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