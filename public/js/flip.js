const card = document.querySelector(".card__inner")
const card_img = document.querySelector("#card-image")
const card_name = document.querySelector("#card-name")
const card_body = document.querySelector("#card-body")
const card_tags = document.querySelector("#card-tags")

const insta_link = document.querySelector("#insta")
const naver_link = document.querySelector("#naver")

let is_flipped = false;

const xhttp = new XMLHttpRequest();

const DEFAULT_IMAGE_ROOT = "../dataset/IMG/"
const DEFAULT_TEXT_ROOT = "../dataset/TEXT/"
const DEFAULT_XML_ROOT = "../dataset/XML/"

const DEFAULT_INSTA_URL = "https://www.instagram.com/explore/tags/"
const DEFAULT_NAVER_URL = "https://map.naver.com/v5/search/"

// Change this part when images are added
const MAX_IMAGE_NUM = 33
const MIN_IMAGE_NUM = 1


window.addEventListener("load", () => {
    let coins = document.querySelector("#coin")

    fetch("/coins_load", { methoad: "GET", })
        .then((res) => res.text())
        .then((coin) => {
            let coins = document.getElementById("coins");
            coins.textContent = coin;
        })
})


card.addEventListener("click", () => {
    if (is_flipped) {
        card.classList.toggle("is-flipped");

        is_flipped = !is_flipped;
        return;
    }


    fetch("/coins", { method: "GET" })
        .then((res) => res.text())
        .then((coin) => {
            let coins = document.getElementById("coins");
            coins.textContent = coin;

            if (coin === "0") {
                return
            }

            card.classList.toggle("is-flipped");

            is_flipped = !is_flipped;

            if (!is_flipped) {
                return;
            }

            // let random_num = String(Math.floor(Math.random() * (MAX_IMAGE_NUM - MIN_IMAGE_NUM)) + MIN_IMAGE_NUM);
            let random_num = String(22);

            // add image
            card_img.src = DEFAULT_IMAGE_ROOT + random_num + ".png";

            xhttp.open("GET", DEFAULT_XML_ROOT + random_num + ".xml", true);
            xhttp.send()
        })

})


xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        setPlaceAndTags(this); // this == xhttp 
    }
}

function setPlaceAndTags(xml) { // ( xml ) 객체 넘겨받기
    xmlDoc = xml.responseXML;

    place = xmlDoc.getElementsByTagName("place");
    tags = xmlDoc.getElementsByTagName("tag");
    console.log(tags.length);

    placetxt = place[0].childNodes[0].nodeValue
    tagstxt = ""

    for (i = 0; i < tags.length; i++) {
        tagstxt += "#" + tags[i].childNodes[0].nodeValue + "&nbsp";
    }

    card_name.innerHTML = placetxt
    card_tags.innerHTML = tagstxt;

    console.log(placetxt)

    insta_link.setAttribute("href", DEFAULT_INSTA_URL + placetxt)
    naver_link.setAttribute("href", DEFAULT_NAVER_URL + placetxt)
}
