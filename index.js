var express = require('express');
var path = require('path');
var open = require('open');
const bruh = require("./api/api")
var fs = require('fs');
const editJSON = require("edit-json-file", {
    autosave: true
  });


const PORT = process.env.PORT || 5000
var app = express();
var homepagePath = '/site/index.html';
var data = editJSON('data.json');


bruh.init(app)

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, homepagePath));
});

app.post('/', function(req, res) {
    console.log("Button Raised = " + !data.get("isRaised"))
    data.set("isRaised", !data.get("isRaised"));
    data.save();
    res.sendFile(path.join(__dirname, homepagePath));
});

app.listen(PORT, function(err){
    if(err){
        console.log(err);
    }else{

    }
});
