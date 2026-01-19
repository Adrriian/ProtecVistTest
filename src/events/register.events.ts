import{openPassword} from '../services/registerUser'
import {registerUser} from '../services/registerUser'


export function showpassword(){
    const rota = document.querySelectorAll('.mother')

    rota.forEach((item)=>{
        const btn = item.querySelector('.openClose')

        if(!btn) return;

        btn.addEventListener('click',()=>{
            openPassword(item)
        })
    })
}

export function btnRegister(){
    document.querySelector('#register')
    ?.addEventListener('click', registerUser)
}
