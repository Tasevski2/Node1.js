var users = require("../models/users");

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
	users.createUser(req.body, (err) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(201,"OK");
		}
	});
};

var deleteCvById = (req, res) => {
	var id = req.params.last_name;
	users.deleteUserById(id, (err) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(204,"deleted");
		}
	});
};

var getCvBySchool = (req, res) => {
	var school = req.params.school;
	users.getCvBySchool(school, (err, data) => {
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
	users.updateById(id, userData, (err) => {
		if(err) {
			res.send(500, err);
		}
		else {
			res.send(201, "OK");
		}
	});
};

module.exports = {
	getAllCvs,
	createCv,
	deleteCvById,
	getCvBySchool,
	updateById
};