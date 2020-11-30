const classroomMap = require("../classroommap")
const loginRequired = require('./auth/loginRequired');
const auth = require("./auth/auth");
const welcomeMessage = require("./welcomeMessage")

function init(app) {
    auth.init(app);

    app.get('/', welcomeMessage, function (req, res) {
        res.render('', { logIn: req.welcomeMessage });
    });
    app.get('/index', loginRequired, welcomeMessage, function (req, res) {
        res.render('index', { logIn: req.welcomeMessage });
    });

    app.get('/brb', loginRequired, welcomeMessage, function (req, res) {
        res.render('brb', { logIn: req.welcomeMessage });
    });

    app.post('/brb', loginRequired, function (req, res) {
        if(req.body.action === "raise") {
            console.log("Raise")
            classroomMap.raiseHand(req.body.classcode)
            res.status(200).send("");
        } else if(req.body.action === "lower") {
            console.log("Lower")
            classroomMap.lowerHand(req.body.classcode)
            res.status(200).send("");
        } else {
            throw new Error("Bad action. Somebody messed up.")
        }      
    });

    app.get('/login', welcomeMessage, function (req, res) {
        res.render('login', { message: req.flash("error"), logIn: req.welcomeMessage });
    });

    app.get('/logout', (req, res) => {
        req.session = null;
        req.logout();
        res.redirect('/');
    });
}

exports.init = init;
