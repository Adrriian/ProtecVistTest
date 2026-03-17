import { addDoc, collection } from "firebase/firestore";

import { auth } from "../config/firebase.config";
import { db } from "../config/firebase.config";

export function changePlate(){
    let inputPlate = document.querySelector('#plate') as HTMLInputElement
    inputPlate.value =  inputPlate.value.toUpperCase()
}

export async function Register() {
    let date:Date = new Date()
    const name = document.querySelector("#name") as HTMLInputElement
    const plate = document.querySelector("#plate") as HTMLInputElement
    const telefone = document.querySelector("#telefone") as HTMLInputElement

    const nameValue:string = name.value;
    const plateValue:string = plate.value;
    const telefoneValue:string = telefone.value;

    
    if(!nameValue && !plateValue && !telefoneValue){
        return alert("Preencha todos os campos")
    }else if(!nameValue){
        return alert("Preencha o nome")
    }else if(!plateValue){
        return alert("Preencha a Placa")
    }else if(!telefoneValue){
        return alert("Preencha o telefone")
    }

     try{
    
         const user = auth.currentUser
        if (!user) return;

        const uid = user.uid
       await addDoc(
            collection(db, "consultores", uid, "clientes"),
            {
                userUid: uid,
                client: nameValue,
                plate: plateValue,
                clientTelefone: telefoneValue,
                status: "Pendente",
                criadoEm: date,
                fotos:{ 
                    placa:"",
                    frente: "",
                    frente_lado_direito:"",
                    Farol_lado_direito:"",
                    Retrovisor_lado_direito:"",
                    Pneu_lado_direito:"",
                    frente_lado_esquerda:"",
                    Farol_lado_esquerdo:"",
                    Retrovisor_lado_esquerdo:"",
                    Pneu_lado_esquerdo:"",
                    traseira:"",
                    traseira_lado_direito:"",
                    Farol_trasiero_direito:"",
                    Pneu_trasiero_direito:"",
                    traseira_lado_esquerdo:"",
                    Farol_trasiero_esquerdo:"",
                    Pneu_trasiero_esquerdo:"",
                    Porta_aberta:"",
                    Kilometragem:"",
                    Parabrisa:"",
                    Motor:"",
                    Chassi:"",}
              
            }
            );
        
        alert('cliente criado')

        name.value = ""
        plate.value = ""
        telefone.value = ""
 }catch(error){
    alert('não foi possivel adicionar o cliente')
 }
    

}