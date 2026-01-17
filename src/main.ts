import './style.css';
// imports from routers
import { navigate } from './router/router'

// carrega página correta ao abrir ou dar F5
navigate(location.pathname, false)

// escuta voltar / avançar
window.addEventListener('popstate', () => {
  navigate(location.pathname, false)
})


