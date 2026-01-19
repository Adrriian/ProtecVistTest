import '../style.css'

export function opeCamera(){
const input = document.querySelector('#camera') as HTMLInputElement
const preview = document.querySelector('#preview') as HTMLImageElement

input.addEventListener('change', () => {
  const file = input.files?.[0]

  if (!file) return

  const url = URL.createObjectURL(file)
  preview.src = url
  preview.classList.remove('hidden')
})
}