import { login } from '../pages/pageLogin'
import { register } from '../pages/pageRegister'
import { changePassword } from '../pages/pageChangePassword'
import { loginEvents } from '../events/login.events'
import {changePasswordEvents} from '../events/changePassword.events'
const app = document.querySelector('.app') as HTMLElement

export function navigate(path: string, push = true) {
  if (push) history.pushState({}, '', path)

  
  switch (path) {
    case '/':
    case '/login':
      app.innerHTML = login()
      loginEvents()
      break;
    case '/register':
        app.innerHTML = register()
    break;
    case '/chagepassword':
        app.innerHTML = changePassword()
        changePasswordEvents()
    break;
    default:
      // 🔥 qualquer rota inválida volta para login
      history.replaceState({}, '', '/login')
      app.innerHTML = login()
      
  }
}
