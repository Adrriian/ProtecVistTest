import '../style.css'
import {login} from '../pages/pageLogin'
import {register} from '../pages/pageRegister'
import {changePassword} from '../pages/pageChangePassword'
import {dashBord} from '../pages/dashBord'
import { link } from '../pages/gerarlink'
// funções do events
import {changePasswordEvents} from '../events/changePassword.events'
import {loginEvents} from '../events/login.router.events'
import {showpassword} from '../events/register.events'
import {btnRegister} from '../events/register.events'
import { openMenu } from '../events/dashbord.events;'
//variavel do main
export let app = document.querySelector('.app') as HTMLElement

export function renderRouter(url:string, path = true){
    if(path){history.pushState({},'',url) }

    switch(url){
        case'/':
        case'/login':
            app.innerHTML = login();
            loginEvents();
        break;
        case '/register':
            app.innerHTML = register()
            showpassword()
            btnRegister()
        break;
        case '/changePassowrd':
            app.innerHTML = changePassword()
            changePasswordEvents()
        break;
        case '/dashBord':
            app.innerHTML = dashBord()
            openMenu()
        break;
        case '/link':
            app.innerHTML = link()
        break;
        default:
            history.replaceState({},'', '/login')
            app.innerHTML= login()
    }
}