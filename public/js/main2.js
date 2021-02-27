var heding = document.getElementById("heding")
var heding2 = document.getElementById("heding2")
var h1 = document.getElementById("h1")

var maindiv = document.getElementById("maindiv")
var bottom_box = document.getElementById("bottom-box")
var body = document.getElementById("body")
var logo = document.getElementById("logo")
const size = document.getElementsByClassName("size")

function mediaFunc(med){
if (med.matches) {
    bottom_box.style.display="none"
body.style.background="linear-gradient(rgb(225, 240, 250)50%,#fff)repeat-x"
heding.style.border="none"
heding.style.background="none"
heding2.style.border="none"
maindiv.style.marginTop="124px"
maindiv.style.border="2px solid green"
maindiv.style.borderRadius="50%"
body.style.zIndex="-1"
maindiv.style.zIndex="1"
maindiv.style.boxShadow=" 0px 0px 335px -78px  #1f601f inset"
// maindiv.style.padding="10px 10px 10px 150px"
h1.style.marginTop="150px"
logo.style.display="none"
}
else{
    heding.style.background="linear-gradient(to bottom, rgb(225, 240, 250),#fff)"
    body.style.background="none"
    logo.style.display="flex"
heding.style.border="4px solid #339933"
heding2.style.border="4px solid #339933"
maindiv.style.marginTop="100px"
bottom_box.style.display="block"
maindiv.style.border="none"
maindiv.style.borderRadius="none"
maindiv.style.boxShadow="none"
}}

const medialist = window.matchMedia("(max-width:700px)")
mediaFunc(medialist)
medialist.addListener(mediaFunc)