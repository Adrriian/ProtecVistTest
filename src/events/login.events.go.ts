import{btnLogin} from '../services/Login'

export function go(){
   document.querySelector('#login')
  ?.addEventListener('click',()=>{
    btnLogin()
   
  } )
}
