const express = require('express');
const open = require('open');
const app = express();
const api = require('./api/api');
const user = require('./user/user')
const dotenv = require('dotenv');
const passport = require('passport');

dotenv.config()

const PORT = process.env.PORT || 5000

app.use(passport.initialize());
app.use(flash());

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
