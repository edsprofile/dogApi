var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req,res){
    var url = "https://dog.ceo/api/breeds/list/all";
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            var data = JSON.parse(body);
            res.render("search", {data: data});
        }
    });
});

app.get("/results", function(req,res){
    var query = req.query.breed;
    console.log(query);
    var url = "https://dog.ceo/api/breed/" + query + "/images/random/10";
    console.log(url);
    request(url, function(error, response, body){
        if(!error && response.statusCode === 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(3000, function(){
    console.log("Dog app started.");
});
