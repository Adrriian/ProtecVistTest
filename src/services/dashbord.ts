import '../style.css'
import { renderRouter } from '../router/router'
import { 
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from './firebase'
import {auth} from './firebase'


type VistoriaData = {
  id: string;
  client: string;
  clientTelefone: string;
  plate: string;
  status: string;
  user: string;
  userTelefone: string;
  userUid: string;
  data: any;       // ou Timestamp se quiser
  fotos: string[];
};

export function menu(){
    let menuArea = document.querySelector('#bar') as HTMLDivElement
    let bluer = document.querySelector('#bluer') as HTMLDivElement
    
    if(menuArea.style.width !== "0px" || menuArea.style.width === "0px" ){
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

export async function changeColor(){
    await show()

    
    const select = document.querySelectorAll<HTMLElement>('.select');

    select.forEach(item => {
    const value = item.textContent;

    switch (value) {
        case 'pendente':
        item.style.background = 'yellow';
        item.style.color = 'blue';
        break;

        case 'feito':
        item.style.background = 'green';
        item.style.color = 'white';
        
        break;

        case 'cancelado':
        item.style.background = 'red';
        item.style.color = 'white';
        
        break;

        default:
        item.style.background = 'white';
        item.style.color = 'blue';
        
        break;
    }
    
    });

    
    
}

export async function show(){
    const user = auth.currentUser;

    if (!user) return;

    const uid = user.uid;

    const vistoriaRef = collection(db, 'consultores',uid,"clientes")
    const q = query(vistoriaRef,where("userUid", "==", uid))

    const data = await getDocs(q)

   
    const dados = data.docs.map(doc =>({id:doc.id,  ...(doc.data() as Omit<VistoriaData, "id">)}));
    console.log(dados)

    let showDiv = document.querySelector('#showDiv') as HTMLDivElement

    showDiv.innerHTML = ''
    
 
    for(let i in dados){
        
        //area pai
        let area = document.createElement('div')
        area.classList.add('open','flex', 'flex-col', 'bg-slate-800', 'dark:bg-white', 'rounded-xl', 'p-3', 'cursor-pointer', 'gap-2', 'transition-all', 'duration-300', 'hover:shadow-[0_0_20px_blue]')
        //areamae
        let areatwo = document.createElement('div') as HTMLDivElement
        areatwo?.classList.add('flex', 'items-center', 'gap-3')
        
        let areatre = document.createElement('div') as HTMLDivElement 
        areatre.classList.add('flex', 'gap-3', 'mt-3', 'items-center')  

        let areafor = document.createElement('div') as HTMLDivElement

        //areatwo elementos
        let areaimg = document.createElement('div') as HTMLDivElement
        let img = document.createElement('img') as HTMLImageElement
        img.src="data:image/jpeg;base64,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"
        img.classList.add('w-8', 'h-8', 'rounded-sm')

        let h1 = document.createElement('h1') as HTMLElement
        h1.classList.add('text-blue-700', 'font-bold')
        h1.innerHTML = dados[i].client
       
        

        //elemento da aretre
        let divsvg = document.createElement('div') as HTMLDivElement

        let hareatre = document.createElement('h1') as HTMLElement
        hareatre.classList.add('text-sm', 'text-white', 'dark:text-sky-900', 'font-bold')
        hareatre.innerHTML = dados[i].clientTelefone
        
        let hareatre2 = document.createElement('h1') as HTMLElement
        hareatre2.classList.add('text-sm', 'text-white', 'dark:text-sky-900', 'font-bold')
        hareatre2.innerHTML = dados[i].plate
        

        //elementos areafor
        let harefor = document.createElement('h1') as HTMLElement
        harefor.classList.add('select', 'text-white', 'dark:text-blue-700','inline-block', 'bg-green-300/50', 'pt-1', 'pb-1', 'pl-5', 'pr-5', 'rounded', 'font-bold', 'text-sm')
       
        harefor.innerHTML= dados[i].status
        //estrutura area two
        areaimg.appendChild(img)
        areatwo.appendChild(areaimg)
        areatwo.appendChild(h1)
        
        //estrutura areatre
        divsvg.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 stroke-white dark:stroke-sky-900"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>'
        areatre.appendChild(divsvg)
        areatre.appendChild(hareatre)
        areatre.appendChild(hareatre2)

        //estrutura areafor
        areafor.appendChild(harefor)

        //estutura da div pai

        area.appendChild(areatwo)
        area.appendChild(areatre)
        area.appendChild(areafor)
        
        //jogando no html
        showDiv.appendChild(area)
    }   

}

export function openModal(){
    const area_blur = document.querySelector('.area_blur') as HTMLDivElement
    const modal = document.getElementById('modal') as HTMLDivElement
    const modalContent = document.getElementById('modalContent') as HTMLDivElement

    modal.classList.remove('opacity-0', 'pointer-events-none', )
    modal.classList.add('opacity-100', 'pointer-events-auto', )
    area_blur.classList.add('blur')
   requestAnimationFrame(() => {
    modalContent.classList.remove('scale-95', 'translate-y-4', 'opacity-0')
    modalContent.classList.add('scale-100', 'translate-y-0', 'opacity-100')
  })
}