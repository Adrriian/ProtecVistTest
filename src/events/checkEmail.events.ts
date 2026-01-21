
import { checkEmail } from '../services/check'

export function emailEventPage(){
    document.querySelector('#goEmail')?.addEventListener('click', checkEmail)
}