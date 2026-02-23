import { menu } from "../services/dashbord";
import { goGerarLink} from "../services/dashbord"; 
import { close } from "../services/dashbord";
import { openModal } from '../services/dashbord';

export function modalEvents(){
    document.addEventListener('click', (event)=>{
        const element = event.target as HTMLElement
          console.log('click listener ativo')
        if(element.classList.contains('open')){
            openModal()
        }
    })
}
export function openMenu(){
    document.querySelector('#menuarea')?.addEventListener('click', menu)
    document.querySelector('#link')?.addEventListener('click', goGerarLink)
    document.querySelector('#closes')?.addEventListener('click', close)
    document.querySelector('#modal')?.addEventListener('click', openModal)
}