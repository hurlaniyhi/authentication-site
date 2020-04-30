const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const port = process.env.PORT|| 3000
const path = require("path")
const app = express()


app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json())


app.use(express.static(path.join(__dirname,"asset")))
app.set('views',path.join(__dirname, "/views/"))
app.engine('hbs',exphbs({extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layout'}))
app.set('view engine', 'hbs')

app.get("/",(req,res)=>{
    res.render("page/loginPage")
})

app.post("/",(req,res)=>{
    if(req.body.username == "sound wallet" && req.body.password == "1234"){
        
        res.send("Successful")
    }
    else{
        res.send("Failed")
    }
})

app.listen(port,()=>{
    console.log("server is running on port 3000")
})