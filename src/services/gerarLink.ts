import { addDoc, collection, setDoc } from "firebase/firestore";
import { renderRouter } from "../router/router";
import { auth } from "./firebase";
import { db } from "./firebase";

export function changePlate(){
    let inputPlate = document.querySelector('#plate') as HTMLInputElement
    inputPlate.value =  inputPlate.value.toUpperCase()
}
export async function gerarLink(){
    let date:Date = new Date()
    let inputName = document.querySelector('#name') as HTMLInputElement
    let inputPlate = document.querySelector('#plate') as HTMLInputElement
    let inputTelefone = document.querySelector('#telefone') as HTMLInputElement


    const name:string = inputName.value
    const plate:string = inputPlate.value;
    const telefone:string = inputTelefone.value;

    if(!name && !plate && !telefone){
        alert('Inicie seu cadastro')
        return
    }else if(!name){
        alert('Digite seu nome')
        return
    }else if(!plate){
        alert('Digite a Placa')
        return
    }else if(!telefone){
        alert('Digite seu Telefone')
        return
    }
 try{
    const user = auth.currentUser
        if (!user) return;

        const uid = user.uid

       await addDoc(
            collection(db, "consultores", uid, "clientes"),
            {
                userUid: uid,
                client: name,
                plate: plate,
                clientTelefone: telefone,
                status: "pendente",
                criadoEm: date,
                fotos: [],
            }
            );
        
        alert('cliente criado')

        inputName.value = ""
        inputPlate.value = ""
        inputTelefone.value = ""
 }catch(error){
    alert('não foi possivel adicionar o cliente')
 }
   

    
}

