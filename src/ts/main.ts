import './../style.css';
// imports from pages
import { login } from '../pages/pageLogin';
import { register } from '../pages/pageRegister';
import { changePassword } from '../pages/pageChangePassword'

// imports from ts functions
import {btnChangePassword} from '../ts/changePassword'

// função de exibição padrão da primeira page
let app = document.querySelector('.app') as HTMLElement
function render(pages:string){ 
 app.innerHTML = pages
} 
render(login())

// função para exibir a area de troca de senha
let goChangePassword = document.querySelector('#gochangePassword') as HTMLLinkElement
goChangePassword?.addEventListener('click', ()=>{
  render(changePassword())
  const btn = document.querySelector('.btn')
  btn?.addEventListener('click', btnChangePassword)
})


// função para exibir a area de cadastro
let registerBtn = document.querySelector('#goRegister') as HTMLLinkElement
registerBtn?.addEventListener('click', ()=>{
  render(register())
})