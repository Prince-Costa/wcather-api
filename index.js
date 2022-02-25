document.getElementById('btn').addEventListener('click', () => {
    const cityName = document.getElementById('input-field').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a6926e46a00aef4ecce809473727029a`)
        .then(res => res.json())
        .then(data => setData(data));
})

fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=a6926e46a00aef4ecce809473727029a`)
.then(res => res.json())
.then(data => setData(data));

function setData(data){
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('temp').innerText = data.main.temp;
    document.getElementById('condition').innerText = data.weather[0].main;
    const icon = data.weather[0].icon;
    document.getElementById('img').src = `https://openweathermap.org/img/wn/${icon}@2x.png`
}
