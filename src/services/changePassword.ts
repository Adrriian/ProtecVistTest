import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "./firebase"

export async function btnChangePassword(){

    let email = document.querySelector('.email') as HTMLInputElement
    const resetEmail:string = email.value

    if(!resetEmail){
        alert('Digite seu email')
        return
    }

    try{
        await sendPasswordResetEmail(auth, resetEmail)
        alert('Se o email estiver cadastrado, você receberá um link de recuperação.')
        
    }catch(error:any){

        if(error.code === "auth/invalid-email"){
            alert('Email invalido')
        }else{
            alert('Email não enviado')
        }
    }
        
}
