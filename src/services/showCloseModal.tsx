export function showModal() {
    const modal = document.querySelector('#modal') as HTMLDialogElement | null
    if (!modal) return

    modal.classList.add('flex')
    modal.showModal()

}

export function closeModal() {
    const modal = document.querySelector('#modal') as HTMLDialogElement | null
    if (!modal) return
    const close = document.querySelector('.close') as HTMLElement

    close.addEventListener('click', () => {
        modal.close()
        modal.classList.remove('flex')
    })

}