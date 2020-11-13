const userList = [];

function registerUser(username) {
	console.log(username)
	return new Promise(function(resolve, reject) {
		// Only add if it's new user
		if (!userList.includes(username)) {
			userList.push(username);
		}

		resolve(username);
    });
}
exports.registerUser = registerUser;

