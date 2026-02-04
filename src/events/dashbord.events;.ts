import { menu } from "../services/dashbord";
import { goGerarLink} from "../services/dashbord"; 
import { changeColor } from "../services/dashbord";
import { close } from "../services/dashbord";

export function openMenu(){
    document.querySelector('#menuarea')?.addEventListener('click', menu)
    document.querySelector('#link')?.addEventListener('click', goGerarLink)
    document.querySelector('#closes')?.addEventListener('click', close)
}