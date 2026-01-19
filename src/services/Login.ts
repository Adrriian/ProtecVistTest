import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase"
import { renderRouter } from '../router/router'
import {consultarPlate} from '../pages/pageConsultarplacas'
import {app} from '../router/router'
export async function btnLogin(){
    let email = document.querySelector('#email') as HTMLInputElement
    let password = document.querySelector('#senha') as HTMLInputElement

    const emailValue:string = email.value
    const passwordValue:string = password.value

    if(!emailValue && !passwordValue ){
        alert('Digite seu email e sua senha')
        return
    }else if(!emailValue){
        alert('Digite seu email')
        return
    }else if(!passwordValue){
        alert('Digite Sua senha')
        return
    }

    try{
        await signInWithEmailAndPassword(auth, emailValue,passwordValue)
        alert('usuario cadastrado');
        renderRouter('/plate');{
            app.innerHTML = consultarPlate()
        }
    }catch(error:any){
    switch (error.code) {
        case 'auth/user-not-found':
        alert('Usuário não encontrado')
        break
        case 'auth/wrong-password':
        alert('Senha incorreta')
        break
        case 'auth/invalid-email':
        alert('Email inválido')
        break
        case 'auth/invalid-credential':
              alert('Email ou senha incorretos')
        break;
        default:
        alert('Erro ao fazer login')
        }
    }
}
