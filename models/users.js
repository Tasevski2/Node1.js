var mongoose = require("mongoose");


var Users = mongoose.model(
	"users_domasna"
	new mongoose.Schema({
		"firts_name": String,
		"last_name": String,
		"birth_date": Number,
		"email": String,
		"phone": Number,
		"current_residence": {
			"country": String,
			"city": String,
			"zip_code":
		},
		"education": [{
			"university_name": String,
			"level": String,
			"degree": String,
			"start_at": Number,
			"finish_at": Number
		}],
		"work_experience": {
			"job_title": String,
			"company_name": String,
			"start_at": Number,
			"finish_at": Number
		},
		"skills_interstes": {
			"main_skills": String,
			"languages": String,
			"computer_technology": String,
			"interests": String
		}
	}) 

	);


var getAllUsers = (cb) => {
	Users.find({}, (err, data) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(data);
		}
	});
};

var createUser = (userData, cb) => {
	var user= new Users(userData);
	user.save((err, data) => {
		if(err) {
			return cb(err);
		}
		else {
			return(null);
		}
	});
};

var deleteUserByCountry = (country_name, cb) => {
	Users.deleteOne({current_residence: {country: country_name}}, (err) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(null);
		}
	});
};


var getUserByUniversity = (university, cb) => {
	Users.find({university_name: university}, (err,data) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(data);
		}
	});
};

var updateById = (id, data, cb) => {
	Users.updateOne({_id: id}, data, (err) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(data);
		}
	});
};

module.exports = {
	getAllUsers,
	crateUser,
	deleteUserByCountry,
	getUserByUniversity,
	updateById
};