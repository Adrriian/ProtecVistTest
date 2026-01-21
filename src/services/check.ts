import { sendEmailVerification } from "firebase/auth";
import {auth} from "./firebase"
import { fetchSignInMethodsForEmail } from "firebase/auth"

export async function verificarSeEmailExiste(email: string): Promise<boolean> {
  const metodosDeLogin = await fetchSignInMethodsForEmail(auth, email)

  // Se o array tiver pelo menos 1 método, o email já existe
  return metodosDeLogin.length > 0
}

export async function checkEmail(){
    let email = document.querySelector('#email') as HTMLInputElement
    let emailValue:string = email.value


    const inputEmail = document.querySelector('#email') as HTMLInputElement | null
    if (!inputEmail) return

    const emailDigitado = inputEmail.value

    const emailExiste = await verificarSeEmailExiste(emailDigitado)

    if (emailExiste) {
      alert("Esse email já está cadastrado")
      return
    }

   
}