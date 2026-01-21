import { db } from "../firebase";
import { doc,getDoc } from "firebase/firestore";
import {auth} from "../firebase"

 export type consultores = {
    aprovado:boolean,
    ativo:boolean
 }
 
export async function checkDoc(): Promise <consultores | null>{
    
    const user = auth.currentUser
    if(!user) return null

    const ref = doc(db, 'consultores', user.uid)
    const refData = await getDoc(ref)

    if(!refData.exists()) return null

    const dados = refData.data()

    return{
        aprovado: dados.aprovado === true,
        ativo: dados.ativo === true
    }
}
