import './style.css'
import {renderRouter} from './router/router'


renderRouter(location.pathname, false)

window.addEventListener('popstate', ()=>{
    renderRouter(location.pathname, false)
})