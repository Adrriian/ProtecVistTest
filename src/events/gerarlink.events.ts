
import {changePlate} from "./../services/gerarLink"

export function toUpperCase() {
  document.querySelector('#plate')
    ?.addEventListener('input', changePlate)
}