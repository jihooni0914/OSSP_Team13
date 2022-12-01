const heart_canvas = document.querySelector("#canvas")
const flip_card_link = "flip-card.html"

heart_canvas.addEventListener("click", () => {
    location.href = flip_card_link;
    location.replace(flip_card_link);
    window.open(flip_card_link);
})