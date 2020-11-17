const express = require('express');
const open = require('open');
const path = require('path');
const app = express();
const api = require('./api/api');
const user = require('./user/user')
const dotenv = require('dotenv');
const passport = require('passport');
const flash = require('connect-flash')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

dotenv.config()

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/site'));

app.use(flash());
app.use(bodyParser.json());

app.use(cookieSession({
    name: "session",
    keys: ['secret'],
    maxAge: 24 * 60 * 60 * 1000 //24 hours
}))

app.use(passport.initialize())
app.use(passport.session())

api.init(app);
user.init(app);

app.use(express.static('site'));

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on localhost:" + PORT);
    open('http://localhost:' + PORT);
  }
});
