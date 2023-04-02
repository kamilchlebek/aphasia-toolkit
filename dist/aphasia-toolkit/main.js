const buttons = document.querySelectorAll('button')
const table = document.querySelector('table')
buttons.forEach(button => {
    const tr = button.closest('tr')
    const audio = new Audio(`assets/${button.dataset.letter}.ogg`)
    button.addEventListener('click', () => {
        audio.play()
    })
    audio.addEventListener('play', () => {
        tr.classList.add('playing')
        table.classList.add('playing')
    })
    audio.addEventListener('ended', () => {
        tr.classList.remove('playing')
        table.classList.remove('playing')
    })
})
