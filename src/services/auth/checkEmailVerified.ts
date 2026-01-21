import { auth } from "../firebase";


export async function checkEmail(){
    const user = auth.currentUser
    if(!user) return false 

    await user.reload()
    return user.emailVerified === true
}