const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const editJSON = require("edit-json-file", {
  autosave: true
});


function init(app) {
  app.get('/', function(req, res) {
    res.render('index')
  });
  app.get('/index', function(req, res) {
    res.render('index')
  });

  app.get('/brb', function(req, res) {
    res.render('brb')
  });



  app.post('/brb', function(req, res) {
    var data = editJSON('data.json');
    console.log("Button Raised = " + !data.get("isRaised"))
    data.set("isRaised", !data.get("isRaised"));
    data.save();
    res.render('brb')
  });
}



exports.init = init
