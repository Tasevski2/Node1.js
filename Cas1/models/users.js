var mongoose = require("mongoose");

var Users = mongoose.model(
	"users",
	new mongoose.Schema({
		"firstname" : String, 
	    "lastname" : String, 
	    "email" : String, 
	    "location" : {
	        "country" : String, 
	        "city" : String, 
	        "municipality" : String
	    }
	})
);

var getAllUsers = (cb) => {
	Users.find({}, (err, data) => {
		if(err) {
			return cb(err, null)
		} else {
			return cb(null , data);
		}
	});
};

var getUsersByName = (name, cb) =>{
	Users.find({firstname: name}, (err ,data) =>{
		if(err)
			return cb(err, null);
		else
			return cb(null, data);
	})
};

module.exports = {
	getAllUsers,
	getUsersByName
};