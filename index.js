const express = require('express');
const open = require('open');
const path = require('path');
const PORT = process.env.PORT || 5000
const app = express();

const api = require('./api/api');
const user = require('./user/user')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/site'));


api.init(app)
user.init(app)

app.use(express.static('site'));

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on localhost:" + PORT);
    open('http://localhost:' + PORT);
  }
});
