const passport = require('passport');
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
            // todo: define the logic on adding/registering the login user if needed
            user.registerUser(profile.id).then(function () {
                return done(null, {
                    id: profile.id
                });
            });
        }
    ));

}

function registerRoutes(app) {
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/');
        });
}

exports.init = init