const loginRequired = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    req.flash('error', 'Please log in first.');
    res.redirect('/login')
  }
}

module.exports = loginRequired
