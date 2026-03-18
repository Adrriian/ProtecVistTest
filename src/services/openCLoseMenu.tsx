export function menu() {
    let menuArea = document.querySelector('#bar') as HTMLDivElement
    let bluer = document.querySelector('#bluer') as HTMLDivElement

    if (menuArea.style.width !== "0px" || menuArea.style.width === "0px") {
        menuArea.style.width = '300px'
        bluer.style.filter = 'blur(5px)'
    }
}
export function close() {
    let menuArea = document.querySelector('#bar') as HTMLDivElement
    let bluer = document.querySelector('#bluer') as HTMLDivElement

    if (menuArea.style.width === "300px") {
        menuArea.style.width = "0px"
        bluer.style.filter = 'blur(0px)'

    }
}