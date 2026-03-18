import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../config/firebase.config"

export async function changePassword() {
    const email = document.querySelector("#email") as HTMLInputElement
    const emailValue: string = email.value

    if (!emailValue) {
        return alert("Digite seu email")
    }
    try {

        await sendPasswordResetEmail(auth, emailValue)
        alert("Email de redefinição enviado! Verifique Seu Spam")

    } catch (error) {

        console.error(error)
        alert("Erro ao enviar email")

    }

}