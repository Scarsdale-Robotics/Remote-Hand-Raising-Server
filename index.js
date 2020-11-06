var express = require('express');
var path = require('path');
var open = require('open');
var fs = require('fs');
const editJSON = require("edit-json-file", {
    autosave: true
  });


var port = 8080;
var app = express();
var homepagePath = '/src/site/index.html';
var data = editJSON('data.json');


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, homepagePath));
});

app.post('/', function(req, res) {
    console.log("Button Press")
    data.set("isRaised", !data.get("isRaised"));
    data.save();
    res.sendFile(path.join(__dirname, homepagePath));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});
