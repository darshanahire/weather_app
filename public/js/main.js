const now = new Date()
var currTime = now.getHours()
// console.log(currTime);


var bg = document.getElementById("bg")
var bg_color = document.getElementById("weather-bg-blue")

if (currTime >= 19 || currTime <= 6) {
    bg.style.background = "url('../images/night.jpg')no-repeat center";
    bg.style.height = "706px"
    bg_color.style.background = "linear-gradient(to bottom,#A0A0A0,#fff)";
    // console.log("night mode");
}
else {
    bg.style.background = "url('../images/morning.jpg')no-repeat center";
    bg.style.color = "black"
    bg.style.height = "706px"
    bg_color.style.background = "linear-gradient(to bottom, rgb(210 230 243),#fff)";
    // console.log("Day mode");
}


// main scripts

getTemp = async (e) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe5abb3404a48d0a053aafeaf621f308`;
    const data = await fetch(url)
    const responce = await data.json()
    const mainRes = [responce]


    let temp = (mainRes[0].main.temp) - 273.15

    let tempreture = document.getElementById("tempreture")
    temp = Math.ceil(temp)
    tempreture.innerHTML = `${temp}<sup>o</sup>C`
    // console.log(Math.ceil(temp));


    const atmPress = document.getElementById("atmPress")
    atmPress.innerHTML = `<img src="images/cloud.svg"> ${mainRes[0].main.pressure}mb`
    const windSpeed = document.getElementById("windSpeed")
    windSpeed.innerHTML = `<img src="images/wind.svg"> ${mainRes[0].wind.speed}m/s`
    const humidity = document.getElementById("humidity")
    humidity.innerHTML = `<img src="images/humidity.svg"> ${mainRes[0].main.humidity}%`
    const country = document.getElementById("country")
    country.innerHTML = `${mainRes[0].name},${mainRes[0].sys.country}`
    const atmName = document.getElementById("atmName")
    atmName.innerHTML = mainRes[0].weather[0].main
    const atmType = document.getElementById("atmType")
    // country.innerHTML=mainRes[0].sys.country
}

if (localStorage.getItem("key") == undefined) {
    var city = "pune"
    getTemp()
}
else {
    let dar = localStorage.getItem("key")
    var city = dar
    getTemp()
}


const btn = document.getElementById("btn")
btn.addEventListener("click", () => {

    // localStorage.clear()
    const cityName = document.getElementById("cityName")
    city = cityName.value
    if(city!=""){
    localStorage.setItem("key",city)
    cityName.innerText = ""
    const form = document.getElementById("form")
    form.reset()
    getTemp()}
}
)



