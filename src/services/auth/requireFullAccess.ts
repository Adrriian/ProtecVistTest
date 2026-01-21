import {auth} from "../firebase"
import { onAuthStateChanged } from "firebase/auth"
import { renderRouter } from "../../router/router"
import { checkDoc } from "./checkConsultorStatus"


export function checkRender(callback: ()=>void){
    onAuthStateChanged(auth, async (user)=>{

        if(!user){
            alert('Usuáiro não Encontrado')
            renderRouter('/login', true)
            return
        }

        if(!user.emailVerified){
            alert('Necessario confirmar o seu email (O email de verificação pode estar no seu spam)')
             renderRouter("/login", true)
            return
        }

        const status = await checkDoc()

        if(!status || !status.aprovado){
            alert('Usuario não aprovado pelo adm')
            renderRouter('/login')
            return
        }

        if(!status.ativo){
            alert('Usuario desativado por falta de pagamento')
             renderRouter('/login')
            return
        }
        callback()
    })
}