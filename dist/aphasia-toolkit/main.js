const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    const audio = new Audio(`assets/${button.dataset.letter}.ogg`)
    button.addEventListener("click", () => {
        audio.play();
    });
});
