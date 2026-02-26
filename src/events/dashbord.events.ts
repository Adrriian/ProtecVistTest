import { carregarUsuario, menu } from "../services/dashbord";
import { goGerarLink} from "../services/dashbord"; 
import { close } from "../services/dashbord";
import { auth } from "../services/firebase";



export function closeModal(){
    const modal = document.querySelector('#modal') as HTMLDialogElement | null
    if(!modal) return
    const close = document.querySelector('.close') as HTMLElement

    close.addEventListener('click', ()=>{
        modal.close()
        modal.classList.remove('flex')
    })
    
}
export async function getId() {
    const modal = document.querySelector('#modal') as HTMLDialogElement | null
    if(!modal) return

    const user = auth.currentUser
    if (!user) return;
   
    
    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement
        const trigger = target.closest('.open') as HTMLElement | null
        if (!trigger) return

        const userId = trigger.dataset.userId
        if(!userId) return

        const users = userId
        carregarUsuario(users)
       
    })
    
}



export function openMenu(){
    document.querySelector('#menuarea')?.addEventListener('click', menu)
    document.querySelector('#link')?.addEventListener('click', goGerarLink)
    document.querySelector('#closes')?.addEventListener('click', close)
}