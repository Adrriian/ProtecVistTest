import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"
import { auth,db } from "../config/firebase.config"
import { doc, getDoc, setDoc } from "firebase/firestore"
// A função agora recebe os valores como argumentos, tornando-a independente do DOM e reutilizável.
export async function login(navigate:any) {
    const email = document.querySelector("#email") as HTMLInputElement
    const senha = document.querySelector("#senha") as HTMLInputElement
    
    const emailValue: string = email.value
    const senhaValue: string = senha.value

    const user = auth.currentUser
    if (!user) {
        console.log("Nenhum usuário logado.");
        return null;
    }


    if (!emailValue && !senhaValue) {
        return alert("digite o email e a senha")
    }
    else if (!emailValue) {
        return alert("digite o email")
    } else if (!senhaValue) {
        return alert("digite a senha")
    }

    try {

        const result = await signInWithEmailAndPassword(auth, emailValue, senhaValue)
        navigate("/dashboard")
        return result.user

    } catch (error) {
        console.error("Erro no login:", error)
        throw error
    }

}

export async function loginGO(navigate:any){

  const provider = new GoogleAuthProvider()

  const result = await signInWithPopup(auth, provider)

  const user = result.user

  const ref = doc(db,"consultores", user.uid)

  const snap = await getDoc(ref)

  // se usuário não existir no banco
  if(!snap.exists()){

    await setDoc(ref,{
        Userid: user.uid,
      name: "",
      email: user.email || "",
      telefone: "",
      aprovado:"",
      aprovadoEm:"",
      aprovadoPor:"",
      ativo:false,
      criadoEm: new Date()
    })

  }
   navigate("/dashboard")



}
export async function changePassword(navigate:any) {
    navigate("/ChangePassword")
}