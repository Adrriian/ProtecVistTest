import { dataModal, menu } from "../services/dashbord";
import { goGerarLink} from "../services/dashbord"; 
import { close } from "../services/dashbord";

export function modalEvents(){
    const modal = document.querySelector('#modal') as HTMLDialogElement | null
    if(!modal) return

    document.addEventListener('click', (event)=>{
        const element  = event.target as HTMLElement

        if(element.closest(".open")){
            modal.showModal()
            dataModal()
            modal.classList.add('flex')
        }
    })
}

export function closeModal(){
    const modal = document.querySelector('#modal') as HTMLDialogElement | null
    if(!modal) return
    const close = document.querySelector('.close') as HTMLElement

    close.addEventListener('click', ()=>{
        modal.close()
        modal.classList.remove('flex')
    })
    
}
export function openMenu(){
    document.querySelector('#menuarea')?.addEventListener('click', menu)
    document.querySelector('#link')?.addEventListener('click', goGerarLink)
    document.querySelector('#closes')?.addEventListener('click', close)
}