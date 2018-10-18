var mongoose = require("mongoose");

var Users = mongoose.model(
	"users",
	new mongoose.Schema({
		"firstname" : String, 
	    "lastname" : String, 
	    "email" : String, 
	    "password": String,
	    "role": String,
	    "location" : {
	        "country" : String, 
	        "city" : String, 
	        "municipality" : String
	    }
	})
);

var getAllUsers = (cb) => {
	Users.find({}, {password: 0}, (err, data) => {
		if(err) {
			return cb(err, null)
		} else {
			return cb(null , data);
		}
	});
};

var getUsersByName = (name, cb) =>{
	Users.find({firstname: name}, (err ,data) =>{
		if(err) {
			return cb(err, null);
		} else {
			return cb(null, data);
		}
	});
};

var getUserByEmail = (email, cb) => {
	Users.findOne({email: email}, {password: 1, role: 1, firstname: 1, lastname: 1, email: 1}, (err, data) => {
		if(err) {
			return cb(err, null);
		} else {
			return cb(null, data);
		}
	});
};

var getUsersByEmail = (email, cb) => {
	Users.findOne({email: email}, (err, data) => {
		if(err) {
			return cb(err, null);
		} else {
			return cb(null, data);
		}
	});
};

var createUser = (userData, cb) => {
	var user = new Users(userData);
	user.save((err, data) => {
		if(err) {
			return cb(err);
		} else {
			return cb(null);
		}
	});
};

var deleteUser = (id, cb) => {
	Users.deleteOne({_id: id}, (err) => {
		if(err) {
			return cb(err);	
		} else {
			return cb(null);
		}
	});
};

var updateById = (id, data, cb) => {
	Users.updateOne({_id: id}, data, (err) => {
		if (err) {
			return cb(err);
		} else {
			return cb(data);
		}
	});
}

module.exports = {
	getAllUsers,
	getUsersByName,
	createUser,
	deleteUser,
	updateById,
	getUserByEmail,
	getUsersByEmail
};