const getJSON = function (url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

getJSON('https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=cae19e9e3d38e18b9aa9c280022af842&units=metric',
    function (err, data) {
        if (err !== null) {
            alert('죄송합니다. 예상치 못한 오류가 발생했습니다.' + err);
        } else {
            loadWeather(data);
        }
    });



function loadWeather(data) {
    let location = document.querySelector('.location');
    let currentTime = document.querySelector('.current-time');
    let currentTemp = document.querySelector('.current-temp');
    let feelsLike = document.querySelector('.feels-like');
    let minTemp = document.querySelector('.min-temp');
    let maxTemp = document.querySelector('.max-temp');
    let icon = document.querySelector('.icon');

    let date = new Date();
    console.log(date);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    location.append(data.name);
    currentTemp.append(`${data.main.temp}°`);
    feelsLike.append(`${data.main.feels_like}°`);
    minTemp.append(`${data.main.temp_min}°`);
    maxTemp.append(`${data.main.temp_max}°`);
    icon.innerHTML = `<img src='https://raw.githubusercontent.com/yuvraaaj/openweathermap-api-icons/master/icons/01d.png'>`;

    currentTime.append(`${month}월 ${day}일 ${hours}:${minutes}`);
}