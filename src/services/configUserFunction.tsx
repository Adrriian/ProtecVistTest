import { doc, getDoc,updateDoc } from "firebase/firestore"
import { db, auth } from "../config/firebase.config"


type User = {
  name: string
  email: string
  telefone: string
}

export async function buscarDadosDoUsuario() {
    let dados: User | null = null

  const user = auth.currentUser
  if (!user) return null

  const ref = doc(db, "consultores", user.uid)

  const snap = await getDoc(ref)

  if (snap.exists()) {
    dados = snap.data() as User
  }
  
  return dados
}

export async function atualizarDadosDoUsuario(dados:User) {
 const user = auth.currentUser
  if(!user) return

  const ref = doc(db,"consultores",user.uid)

  await updateDoc(ref,{
    name: dados.name,
    email: dados.email,
    telefone: dados.telefone
  })

  alert("Dados atualizados com sucesso")  
}