import { menu } from "../services/dashbord";
import { goGerarLink
    
 } from "../services/dashbord"; 
export function openMenu(){
    document.querySelector('#menu')?.addEventListener('click', menu)
    document.querySelector('#link')?.addEventListener('click', goGerarLink)
}