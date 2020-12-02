// ?. = if that property doesn't exist, just evaluate to undefined
// ? and : = basically just an if statement. We use it to check if the givenName is undefined
// Together they ensure we can choose either 'Hi, name' or 'Login' without crashing
const welcomeMessage = (req, res, next) => {
    req.welcomeMessage = req?.user?.name?.givenName ? "Hi, " + req.user.name.givenName : 'Login';
    next();
};

module.exports = welcomeMessage;