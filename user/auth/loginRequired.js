const loginRequired = (req, res, next) => {
    if(req.user) {
        next()
    } else {
        console.log("bruh")
        req.flash('error', 'Please log in first.');
        res.redirect('/login')
    }
}

module.exports = loginRequired