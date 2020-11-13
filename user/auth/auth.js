const passport = require('passport');
const userList = require('./userList')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

function init(app) {

    registerRoutes(app)

    // Use the GoogleStrategy within Passport.
    // Strategies in Passport require a `verify` function, which accept
    // credentials (in this case, an accessToken, refreshToken, and Google
    // profile), and invoke a callback with a user object.
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback"
    },
        function (accessToken, refreshToken, profile, done) {
            if (profile.emails && profile.emails.find(x => x.value.includes('@scarsdaleschools.org'))) {
                userList.registerUser(profile.id).then(function () {
                    done(null, profile)
                })
            }
            else {
                done(null, false, { message: 'Please use a scarsdale schools email' })
            }
        }
    ));

}

function registerRoutes(app) {
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email', 'profile'] }))

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/login',
            successRedirect: '/',
            session: false
        }))
}

exports.init = init