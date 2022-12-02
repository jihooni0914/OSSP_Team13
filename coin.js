const express = require('express')

const app = express()
const port = 3000

let before = new Date();
let before_t = parseInt(before.getHours()) * 3600 + parseInt(before.getMinutes()) * 60 + parseInt(before.getSeconds());

let coins = 5;
let tmp1 = 0;
const delay_time = 600

function coin() {
    let after = new Date();
    let after_t = parseInt(after.getHours()) * 3600 + parseInt(after.getMinutes()) * 60 + parseInt(after.getSeconds());

    let tmp2 = parseInt((after_t - before_t) / delay_time);

    if (tmp1 !== tmp2) {
        coins += (tmp2 - tmp1);
        tmp1 = tmp2;
    }

    if (coins > 5)
        coins = 5;
}


app.get('/coins', (req, res) => {
    coin()
    res.send(coins.toString())
    coins--;
    if (coins < 0)
        coins = 0;
})

app.get('/coins_load', (req, res) => {
    coin()
    res.send(coins.toString())
    if (coins < 0)
        coins = 0;
})


app.use(express.static('public'))

app.listen(port, () => {
    console.log('App started')
})