import { addDoc, collection } from "firebase/firestore";

import { auth } from "../config/firebase.config";
import { db } from "../config/firebase.config";

export function changePlate(){
    let inputPlate = document.querySelector('#plate') as HTMLInputElement
    inputPlate.value =  inputPlate.value.toUpperCase()
}

export async function Register() {
  let date: Date = new Date();

  const name = document.querySelector("#name") as HTMLInputElement;
  const plate = document.querySelector("#plate") as HTMLInputElement;
  const telefoneInput = document.querySelector("#telefone") as HTMLInputElement;

  const nameValue: string = name.value;
  const plateValue: string = plate.value;
  const telefoneValue: string = telefoneInput.value;

  if (!nameValue && !plateValue && !telefoneValue) {
    return alert("Preencha todos os campos");
  } else if (!nameValue) {
    return alert("Preencha o nome");
  } else if (!plateValue) {
    return alert("Preencha a Placa");
  } else if (!telefoneValue) {
    return alert("Preencha o telefone");
  }

  try {
    const user = auth.currentUser;
    if (!user) return;

    const uid = user.uid;

    // 🔥 AGORA PEGAMOS O ID
    const docRef = await addDoc(
      collection(db, "consultores", uid, "clientes"),
      {
        userUid: uid,
        client: nameValue,
        plate: plateValue,
        clientTelefone: telefoneValue,
        status: "Pendente",
        criadoEm: date,
        fotos: {
          placa: "",
          frente: "",
          frente_lado_direito: "",
          Farol_lado_direito: "",
          Retrovisor_lado_direito: "",
          Pneu_lado_direito: "",
          frente_lado_esquerda: "",
          Farol_lado_esquerdo: "",
          Retrovisor_lado_esquerdo: "",
          Pneu_lado_esquerdo: "",
          traseira: "",
          traseira_lado_direito: "",
          Farol_trasiero_direito: "",
          Pneu_trasiero_direito: "",
          traseira_lado_esquerdo: "",
          Farol_trasiero_esquerdo: "",
          Pneu_trasiero_esquerdo: "",
          Porta_aberta: "",
          Kilometragem: "",
          Parabrisa: "",
          Motor: "",
          Chassi: "",
        },
      }
    );

    alert("Cliente criado");

    // 🧹 limpar campos
    name.value = "";
    plate.value = "";
    telefoneInput.value = "";

    // 🚀 WHATSAPP

    const telefone = telefoneValue.replace(/\D/g, "");

    const link = `https://protecvisttest.netlify.app/vistoria/${docRef.id}`;

    const mensagem = `Olá ${nameValue}! Sua vistoria foi criada. Acesse pelo link: ${link}`;

    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

  } catch (error) {
    console.error(error);
    alert("Não foi possível adicionar o cliente");
  }
}