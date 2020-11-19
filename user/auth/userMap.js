const userMap = new Map()
const greetings = {"user": "greeting"}

function registerUser(id, user) {
	return new Promise(function(resolve, reject) {
		// Only add if it's new user
		if (!userMap.has(id)) {
			userMap.set(id, user)
		}
		if (!userMap.has(id)) {
			userMap.set(id, user)
		}
		resolve()
    });
}

function findUser(id) {
	return new Promise(function(resolve, reject) {
		let user = userMap.get(id)
		if(user) {
			resolve(user)
			return
		}
		reject("User not found")
    });
}

exports.registerUser = registerUser;
exports.findUser = findUser;
