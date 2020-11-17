const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const editJSON = require("edit-json-file", {
  autosave: true
});
const loginRequired = require('./auth/loginRequired');
const auth = require("./auth/auth");


function init(app) {
  auth.init(app);

  app.get('/', function (req, res) {
    res.render('index');
  });
  app.get('/index', function (req, res) {
    res.render('index');
  });

  app.get('/brb', loginRequired, function (req, res) {
    res.render('brb');
  });

  app.post('/brb', loginRequired, function (req, res) {
    var data = editJSON('data.json');
    console.log("Button Raised = " + !data.get("isRaised"));
    data.set("isRaised", !data.get("isRaised"));
    data.save();
    res.render('brb');
  });

  app.get('/login', function (req, res) {
    res.render('login', { message: req.flash("error") });
  });

  app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  });
}

exports.init = init;