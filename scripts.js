const API_KEY='28ee77f51a584b67b69563dfa7f5dec4'
const imagesWeather = {
    '-1': 'cold.jpg',
    '0': 'cold.jpg',
    '1': 'warm.jpg'
}
const months = {
    '0': 'Jan',
    '1': 'Feb',
    '2': 'Mar',
    '3': 'Apr',
    '4': 'May',
    '5': 'Jun',
    '6': 'Jul',
    '7': 'Aug',
    '8': 'Sept',
    '9': 'Oct',
    '10': 'Nov',
    '11': 'Dec'
}
const imagesTime = {
    day : 'day.jpg',
    night : 'night.jpg'
}

let date = new Date()



document.getElementById('sendButton').addEventListener("click", async (event) => {
    event.preventDefault()
    document.getElementById('hidden').style.display = 'none'
    const City = document.querySelector('#input').value
    const res = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${City}&APPID=${API_KEY}`)
    const data = await res.json()
   

    if(data.cod !== '404') {
        const cels = Math.round(data.main.temp - 273.15)

        document.querySelector('.wrapper').style.backgroundImage = `url(${imagesWeather [Math.sign(cels)]})` 
        document.getElementById('temperature').textContent = cels + '°c'
        document.getElementById('cityName').textContent = data.name
    } else {
        document.getElementById('hidden').style.display = 'flex'
    }
})

document.querySelector('.time').textContent = date.getDate() +' ' +  (months[date.getMonth()])

//date.setHours(11)

if(date.getHours() <= 8 || date.getHours() >= 21  ){
document.querySelector('.wrapper').style.backgroundImage = `url(${imagesTime ['night']})`
} else{
    document.querySelector('.wrapper').style.backgroundImage = `url(${imagesTime ['day']})`
}