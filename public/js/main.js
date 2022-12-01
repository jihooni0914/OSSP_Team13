let mainText = document.querySelector("#photo-text")

window.addEventListener("scroll", () => {
    let scroll = window.scrollY

    if (scroll > 100) {
        mainText.style.animation = "slide-text-out 1s ease-in forwards"
    }
    else {
        mainText.style.animation = "slide-text-in 1s ease-out"
    }
})