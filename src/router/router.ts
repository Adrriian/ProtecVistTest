import '../style.css'
import {login} from '../pages/pageLogin'
import {register} from '../pages/pageRegister'
import {changePassword} from '../pages/pageChangePassword'
import {dashBord} from '../pages/dashBord'
import { link } from '../pages/gerarlink'
import { vist } from '../pages/vistoria'
import { emailPage } from '../pages/verificarEmail'
import { opeCamera } from '../services/vist'
// funções do events
import {changePasswordEvents} from '../events/changePassword.events'
import {loginEvents} from '../events/login.router.events'
import {showpassword} from '../events/register.events'
import {btnRegister} from '../events/register.events'
import { openMenu } from '../events/dashbord.events;'
import { vistLink } from '../events/vist'
import { checkRender } from '../services/auth/requireFullAccess'
import { emailEventPage } from '../events/checkEmail.events'
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
            checkRender(() => {
               app.innerHTML = dashBord()
               openMenu()
            })
        break;
        case '/link':
            app.innerHTML = link()
            vistLink()
        break;
         case '/vist':
            app.innerHTML = vist()
            opeCamera()
        break;
        case '/checkEmail':
            app.innerHTML = emailPage()
            emailEventPage()
        break;
        default:
            history.replaceState({},'', '/login')
            app.innerHTML= login()
    }
}