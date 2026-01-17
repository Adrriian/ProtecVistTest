import { btnChangePassword } from '../services/changePassword'

export function changePasswordEvents() {
  document.querySelector('.btn')
    ?.addEventListener('click', btnChangePassword)
}
