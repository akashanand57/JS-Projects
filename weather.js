let countrycode = document.querySelector('countrycode')
let cityname = document.querySelector('cityname')
let mainTemp = document.querySelector('mainTemp')
let tempMin = document.querySelector('tempMin')
let tempMax = document.querySelector('tempMax')
let windspeed = document.querySelector('windspeed')
let degree = document.querySelector('degree')
let gust = document.querySelector('gust')
let sunrise = document.querySelector('sunrise')
let sunset = document.querySelector('sunset')
let pressure = document.querySelector('pressure')
let humidity = document.querySelector('humidity')
let sealevel = document.querySelector('sealevel')


let fetching = async () => {
    let resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=noida&appid=12a8706d052c4b8d12686a30a9542686`)
    let data = await resp.json()
    console.log(data)
    countryCode.textContent = data.sys.country
    citynamemain.textContent = data.name
}



fetching()