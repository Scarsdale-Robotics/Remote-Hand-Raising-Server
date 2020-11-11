const express = require('express');
const open = require('open');

const PORT = process.env.PORT || 5000
const app = express();

const api = require('./api/api');
const user = require('./user/user')

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // todo: define the logic on adding/registering the login user if needed
    user.registerUser(profile.id).then(function() {
        return done(null, {
            id: profile.id
        });
    });
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
       //  return done(err, user);
       //});
  }
));


api.init(app)
user.init(app)

app.listen(PORT, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Listening on localhost:" + PORT);
        open('http://localhost:' + PORT);
    }
});
