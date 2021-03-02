var heding = document.getElementById("heding")
var heding2 = document.getElementById("heding2")
var h1 = document.getElementById("h1")
var h4 = document.getElementById("h4")
var design = document.getElementById("design")

var maindiv = document.getElementById("maindiv")
var mobileview = document.getElementById("mobileview")

var bottom_box = document.getElementById("bottom-box")
var body = document.getElementById("body")
var logo = document.getElementById("logo")
const size = document.getElementsByClassName("size")
const topDivs = document.getElementsByClassName("topDivs")

function mediaFunc(med) {
    if (med.matches) {
        bottom_box.style.display = "none"
        body.style.background = "linear-gradient(rgb(225, 240, 250)50%,#fff)repeat-x"
        body.style.backgroundImage = "url('images/bg.png')";
        body.style.backgroundRepeat = "repeat";
        body.style.backgroundSize = "200px";
        body.style.zIndex = -1;


        mobileview.style.display = "block"
        mobileview.style.marginTop = "150px"
        h4.style.margin = "30px auto"
        mobileview.style.border = "5px solid #339933"
        mobileview.style.borderRadius = "50%"
        body.style.zIndex = "-1"
        mobileview.style.zIndex = 1
        mobileview.style.boxShadow = " 0px 0px 140px 6px  #1f601f inset"
        h1.style.marginTop = "190px"
        logo.style.display = "none"
    }
    else {
        body.style.background = "none"
        logo.style.display = "flex"
        h1.style.marginTop = "0px"
        bottom_box.style.display = "block"
        mobileview.style.display = "none"
        design.style.backgroundImage = "url('images/bg.png')";
        design.style.backgroundRepeat = "repeat";
        design.style.backgroundSize = "300px";
        design.style.zIndex = -1;
    }
}

const medialist = window.matchMedia("(max-width:600px)")
mediaFunc(medialist)
medialist.addListener(mediaFunc)