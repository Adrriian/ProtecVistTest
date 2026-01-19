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