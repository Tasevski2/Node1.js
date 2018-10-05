var users = require("../models/handlers");

var getAllUsers = (req,res) => {
	users.getAllUsers((err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
};

var createUser = (req, res) => {
	users.createUser(req.body, (err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
};

var deleteUserByCountry = (req, res) => {
	var country = req.params.country;
	users.deleteUserByCountry(country, (err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
};

var getUserByUniversity = (req, res) => {
	var university = req.params.university;
	users.getUserByUniversity(university, (err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
};

var updateById = (req, res) => {
	var id = req.params.id;
	var userData = req.body;
	users.updateById(id, userData, (err, data) => {
		if(err) {
			res.send(500, err);
		}
		else {
			res.send(201, "OK");
		}
	});
};

module.exports = {
	getAllUsers,
	createUser,
	deleteUserByCountry,
	getUserByUniversity,
	updateById
};