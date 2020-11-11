
const userList = [];

function registerUser(username) {
	return new Promise(function(resolve, reject) {
		// Only add if it's new user
		if (!_.includes(userList, username)) {
			userList.push(username);
		}

		resolve(username);
    });
    
}
exports.registerUser = registerUser;

