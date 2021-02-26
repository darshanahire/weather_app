const express = require("express")
const path = require("path")
const hbs = require("hbs")
const port = process.env.PORT || 8000
const app = express();

const static_path =path.join(__dirname,"../public")
const templete_Path =path.join(__dirname,"../templets/views")
const partials_path =path.join(__dirname,"../templets/partials")

app.set("view engine","hbs")
app.set("views",templete_Path)

app.use(express.static(static_path))
// hbs.registerPartials(partials_path)
hbs.registerPartials(partials_path)


// routing 
app.get("",(req,res)=>{
    res.render("index")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("*",(req,res)=>{
    res.send("404 Error")
})

app.listen(port,()=>{
    console.log("Listening...");
    
})