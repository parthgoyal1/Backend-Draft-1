const fs = require("fs");

const bodyparser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req, res){
    res.sendFile(__dirname + "/calculator.html");
});
app.get("/about", function(req, res){
    res.send("Calculator");
});
app.post("/calculator.html", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
        
    res.send("Result " + result);
});
app.listen(100, function(){
    console.log("Server started");  
});


