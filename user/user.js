const path = require('path')
const fs = require('fs')
const editJSON = require("edit-json-file", {
  autosave: true
});


function init(app) {
  app.get('/', function(req, res) {
    //res.sendFile(path.join(process.cwd(), "/site/index.html"));
    sendSite('site/index.html', res);
  });

  app.get('/brb.html', function(req, res) {
    sendSite('site/brb.html', res);
  });


  app.post('/brb.html', function(req, res) {
    var data = editJSON('data.json');
    console.log("Button Raised = " + !data.get("isRaised"))
    data.set("isRaised", !data.get("isRaised"));
    data.save();
    sendSite('site/brb.html', res)
  });
}

function sendSite(sitePath, response){
  response.send(fs.readFileSync('site/nav.html', 'utf-8') + fs.readFileSync(sitePath, 'utf-8'));
}

exports.init = init
