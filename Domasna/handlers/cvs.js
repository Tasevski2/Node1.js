var cvs = require("../models/cvs");

var getAllCvs = (req,res) => {
	cvs.getAllCvs((err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
};

var createCv = (req, res) => {
	cvs.createCv(req.body, (err) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(201,"OK");
		}
	});
};

var deleteCvById = (req, res) => {
	var id = req.params.id;
	cvs.deleteCvById(id, (err) => {
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
	cvs.getCvBySchool(school, (err, data) => {
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
	cvs.updateById(id, userData, (err) => {
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