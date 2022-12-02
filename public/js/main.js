const heart_canvas = document.querySelector("#canvas")
const flip_card_link = "flip-card.html"
console.log(heart_canvas)

heart_canvas.addEventListener("click", () => {
    let opacity = window.getComputedStyle(heart_canvas).getPropertyValue("opacity");

    if (opacity === "1") {
        location.href = flip_card_link;
        window.open(flip_card_link);
    }
})