import '../style.css'
import {login} from '../pages/pageLogin'
import {register} from '../pages/pageRegister'
import {changePassword} from '../pages/pageChangePassword'
import {consultarPlate} from '../pages/pageConsultarplacas'
// funções do events
import {changePasswordEvents} from '../events/changePassword.events'
import {loginEvents} from '../events/login.router.events'

export let app = document.querySelector('.app') as HTMLElement

export function renderRouter(url:string, path = true){
    if(path){history.pushState({},'',url) }

    switch(url){
        case'/':
        case'/plate':
            app.innerHTML = login();
            loginEvents();
        break;
        case '/register':
            app.innerHTML = register()
        break;
        case '/changePassowrd':
            app.innerHTML = changePassword()
            changePasswordEvents()
        break;
        case '/plate':
            app.innerHTML = consultarPlate()
        break;
        default:
            history.replaceState({},'', '/login')
            app.innerHTML= login()
    }
}