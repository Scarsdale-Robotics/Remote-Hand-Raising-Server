const loginRequired = (req, res, next) => {

  if (req.user) {
    req.flash('logIn', 'Hi, ' + req.user.name.givenName);
    console.log('Hi, ' + req.user.name.givenName)

    next()
  } else {
    console.log("bruh")
    req.flash('error', 'Please log in first.');
    res.redirect('/login')
  }
}

module.exports = loginRequired
