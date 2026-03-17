import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/firebase.config"

export function escutarAuth(callback: any){

  onAuthStateChanged(auth, (user)=>{

    if(user){
      callback(user)
    }else{
      callback(null)
    }

  })

}