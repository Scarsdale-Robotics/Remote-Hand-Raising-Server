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

    app.post('/brb', loginRequired, welcomeMessage, function (req, res) {
        console.log("Button Raised = " + classroomMap.hasHandRaised(req.classcode));
        classroomMap.raiseHand(req.body.classcode)
        res.render('brb', { logIn: req.welcomeMessage });
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
