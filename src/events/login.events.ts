import { navigate } from '../router/router'

export function loginEvents() {
  document.querySelector('#gochangePassword')
    ?.addEventListener('click', () => {
      navigate('/chagepassword')
    })

  document.querySelector('#goRegister')
    ?.addEventListener('click', () => {
      navigate('/register')
    })
}
