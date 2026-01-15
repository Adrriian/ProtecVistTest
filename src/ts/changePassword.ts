import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "./firebase"


let email = document.querySelector('.email') as HTMLInputElement
let btn = document.querySelector('.btn') as HTMLLinkElement

btn.addEventListener('click', async()=>{
    const resetEmail:string = email.value

    if(!resetEmail){
        alert('Digite seu email')
    }

    try{
        await sendPasswordResetEmail(auth, resetEmail)
        alert('Se o email estiver cadastrado, você receberá um link de recuperação.')
        window.location.replace ("../../index.html")
    }catch(error:any){

        if(error.code === "auth/invalid-email"){
            alert('Email invalido')
        }else{
            alert('Email não enviado')
        }
    }
        
})
