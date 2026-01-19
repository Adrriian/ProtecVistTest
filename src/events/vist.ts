import { gerarLink } from "../services/gerarLink";


export function vistLink(){
    document.querySelector('#gerarLink')?.addEventListener('click', gerarLink)
}