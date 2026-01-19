// imports para criação de usuário
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import {auth} from '../services/firebase'

//imports para banco de dados
import { setDoc,doc  } from "firebase/firestore";
import { db } from "../services/firebase";

//imports de routas
import {renderRouter} from'../router/router'


function validarSenha(senha: string) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
  return regex.test(senha);
}

// funções de mostrar senha
export async function registerUser(){
    

    let name = document.querySelector('#name') as HTMLInputElement;
    let email = document.querySelector('#email') as HTMLInputElement;
    let telefone = document.querySelector('#telefone') as HTMLInputElement;
    let password = document.querySelector('#password') as HTMLInputElement;
    let confimPassword = document.querySelector('#confirmPassword') as HTMLInputElement;

    const nameValue:string = name.value
    const emailValue:string = email.value;
    const telefoneValue:string = telefone.value;
    const passwordValue:string = password.value;
    const confirmPasswordValue:string = confimPassword.value;

    if(!nameValue && !emailValue && !telefoneValue && !passwordValue && !confirmPasswordValue){
        alert('Inicie seu cadastro')
        return
    }else if(!nameValue){
        alert('Digite seu nome')
        return
    }else if(!email.value){
        alert('Digite um Email')
        return
    }else if(!telefone.value){
        alert('Digite seu Telefone')
        return
    }else if(!password.value){
        alert('Digite sua Senha')
        return
    }else if(!confimPassword.value){
        alert('Confirme sua Senha')
        return
    }else if(password.value !== confimPassword.value){
        alert('As Senhas não são iguais')
        return
    }else if (!validarSenha(passwordValue && confirmPasswordValue)) {
    alert("Senha deve ter ao menos 6 caracteres, 1 maiúscula, 1 número e 1 símbolo.");
    return; // não cria usuário
    }

    try{
     
        const cred = await createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        cred.user.uid
        await setDoc(doc(db, "consultores", cred.user.uid),{
            name: nameValue,
            email: emailValue,
            Userid:  cred.user.uid,
            adm: false,
            telefone:telefoneValue
        })
        await sendEmailVerification(cred.user);
        alert('usuario cadastrado. Foi enviado um email de confirmação ')
        renderRouter('/login')
    }
    catch(error){}
}

export function openPassword(path:Element){
        const password = path.querySelector('.senha')
        const showPassword = path.querySelector('.openClose')

         if(
            !(password instanceof HTMLInputElement) ||
            !(showPassword instanceof HTMLDivElement)
         ) return;

       if (password.type === 'password') {
        showPassword.innerHTML =
        `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        `
        password.type = 'text';
        } else {
        showPassword.innerHTML =
        `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
        `
        password.type = 'password';
        }
   
}

