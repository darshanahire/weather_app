const now = new Date()
var currTime = now.getHours()
// console.log(currTime);
// var media = window.matchMedia("max-width:700px")


function mediaFunction(med){
if (med.matches) {
    bg_dar.style.display="contents" 
    bg_dar.style.height="100%" 
    bg_dar.style.width="800px" 
    // bg.style.height = "100%"
    // windSpeed.style.background = "black"
    bg_image.style.boxShadow = "none"
    bg_image.style.margin = "0 auto 100px"
    // bg_image.style.margin = "0"
    bg_image.style.background = "none"
    bg_image.style.padding = "0"
    bg_image.style.width = "100%"
    bg_image.style.height = "100vh"
    bg_color.style.background="linear-gradient(rgb(109 184 233), rgb(255, 255, 255))repeat-x";
    myform.style.margin = "73px auto 55px"
    windSpeed.style.margin = "5px -5px 46px 32px"
    bg.style.color = "black"
    
}
else {
    bg_dar.style.height="800px"
    bg_image.style.height = "747px"
    bg_image.style.background = "url('../images/morning.jpg')no-repeat center";
    bg_color.style.background = "linear-gradient(to bottom, rgb(210 230 243),#fff)repeat-x";
    myform.style.margin = "85px auto 30px"
    windSpeed.style.margin = "5px -5px 46px 32px"
    bg.style.color = "black"
    tempreture.style.margin = "-18px auto 50px"
}}


var bg_image = document.getElementById("img-div")
var bg = document.getElementById("bg")
var bg_dar  = document.getElementById("bg-dar")
// var design = document.getElementById("design")
var bg_color = document.getElementById("weather-bg-blue")


const windSpeed = document.getElementById("windSpeed")
const myform = document.getElementById("myform")

const tempreture = document.getElementById("tempreture")

if (currTime >= 19 || currTime <= 6) {
    bg_image.style.background = "url('../images/night.jpg')no-repeat center";
    bg.style.height = "706px"
    bg_color.style.background = "linear-gradient(to bottom,#A0A0A0,#fff)";
    // console.log("night mode");
}
else {
    const media = window.matchMedia("(max-width:700px)")
    mediaFunction(media)
    media.addListener(mediaFunction)
}


// main scripts

getTemp = async (e) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe5abb3404a48d0a053aafeaf621f308`;
    const data = await fetch(url)
    const responce = await data.json()
    const mainRes = [responce]


    let temp = (mainRes[0].main.temp) - 273.15


    temp = Math.ceil(temp)
    tempreture.innerHTML = `${temp}<sup>o</sup>C`
    // console.log(Math.ceil(temp));


    const atmPress = document.getElementById("atmPress")
    atmPress.innerHTML = `<img src="images/cloud.svg"> ${mainRes[0].main.pressure}mb`
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
    if (city != "") {
        localStorage.setItem("key", city)
        cityName.innerText = ""
        const form = document.getElementById("form")
        form.reset()
        getTemp()
    }
}
)



