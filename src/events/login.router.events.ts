import { renderRouter } from '../router/router'
import {btnLogin } from '../services/Login'
import {openPassword} from '../services/Login'

export function loginEvents() {
  document.querySelector('#gochangePassword')
    ?.addEventListener('click', () => {
      renderRouter('/changePassowrd')
    })

  document.querySelector('#goRegister')
    ?.addEventListener('click', () => {
      renderRouter('/register')
    })
  document.querySelector('#login')
  ?.addEventListener('click',()=>{
    btnLogin()
  } )
   document.querySelector('#openClose')
  ?.addEventListener('click',()=>{
    openPassword()
  } )
}
