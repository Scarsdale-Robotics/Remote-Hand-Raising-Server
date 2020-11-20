const passport = require('passport');
const userMap = require('./userMap')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

function init(app) {

    registerRoutes(app)

    //Once this is done, callback is hit
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        userMap.findUser(id).then((user) => {
            done(null, user);
        }).catch(() => {
            done(null, null);
        })
    });

    // Use the GoogleStrategy within Passport.
    // Strategies in Passport require a `verify` function, which accept
    // credentials (in this case, an accessToken, refreshToken, and Google
    // profile), and invoke a callback with a user object.
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // callbackURL: "https://scarsdale-raise-hand.herokuapp.com/auth/google/callback"
        callbackURL: "http://localhost:5000/auth/google/callback"

    },
        function (accessToken, refreshToken, profile, done) {

            userMap.findUser(profile.id).then((user) => {
                if (profile.emails && profile.emails.find(x => x.value.includes('@scarsdaleschools.org'))) {
                    done(null, user)
                }
                else {
                    done(null, false, { message: 'Please use a scarsdale schools email' })
                }
            }).catch(function(err) {
                // add user
                if (profile.emails && profile.emails.find(x => x.value.includes('@scarsdaleschools.org'))) {
                    userMap.registerUser(profile.id, profile)
                    done(null, profile)
                }
                else {
                    done(null, false, { message: 'Please use a scarsdale schools email' })
                }
            })
        }
    ));
}

function registerRoutes(app) {
    app.get('/auth/google',
        passport.authenticate('google', { scope: ['email', 'profile'] }))

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/login',
            successRedirect: '/brb',
            session: true,
            failureFlash: true
        }));
}

exports.init = init
