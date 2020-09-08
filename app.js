const express = require("express");
const https = require("https");
const http = require("http");
const { response } = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
res.sendFile(__dirname+"/weather.html");    
   
});

app.post("/",function (req, res){
    const query = req.body.city;
    https.get("https://samples.openweathermap.org/data/2.5/weather?q="+query+"&appid=439d4b804bc8187953eb36d2a8c26a02", function(response){
        response.on("data", function(data){
             const obj = JSON.parse(data);
             const image = obj.weather[0].icon;
             const imageURL = "http://openweathermap.org/img/wn/"+image+"@2x.png"
             console.log(obj.main.temp);
             res.write("Temperature = " + obj.main.temp + " K");
             res.write(" Description = " + obj.weather[0].description);
             res.write("<img src = 'imageURL'>");
             res.send();
    });
    })

});
app.listen(4000, function(){
    console.log("Server 4000 started");
});