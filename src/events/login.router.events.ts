import { renderRouter } from '../router/router'


export function loginEvents() {
  document.querySelector('#gochangePassword')
    ?.addEventListener('click', () => {
      renderRouter('/changePassowrd')
    })

  document.querySelector('#goRegister')
    ?.addEventListener('click', () => {
      renderRouter('/register')
    })
 
}
