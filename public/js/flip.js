const card = document.querySelector(".card__inner")
const card_img = document.querySelector("#card-image")
const card_name = document.querySelector("#card-name")
const card_body = document.querySelector("#card-body")

const DEFAULT_IMAGE_ROOT = "../dataset/IMG/"
const DEFAULT_TEXT_ROOT = "../dataset/TEXT/"

// Change this part when images are added
const MAX_IMAGE_NUM = 17
const MIN_IMAGE_NUM = 1


card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");

    let random_num = String(Math.floor(Math.random() * (MAX_IMAGE_NUM - MIN_IMAGE_NUM)) + MIN_IMAGE_NUM);

    // add image
    card_img.src = DEFAULT_IMAGE_ROOT + random_num + ".png";

    // clear text
    card_body.removeChild(card_body.lastChild)

    // add text
    let text_object = document.createElement('object');
    text_object.data = DEFAULT_TEXT_ROOT + random_num + ".txt";
    text_object.innerHTML = "data";

    card_body.appendChild(text_object);
})


