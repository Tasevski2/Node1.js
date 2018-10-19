var cvs = require ("../models/cvs");
var validator = require ("fastest-validator");
var v = new validator();

var getAllCvs = (req,res) => {
	cvs.getAllCvs((err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(sdata);
		}
	});
};

var createCv = (req, res) => {
	var schema = {
		first_name: {type: "string", empty: false},
		last_name: {type: "string", empty: false},
		birth_date: {type: "date", empty: false},
		email: {type: "email", empty: false},
		phone: {type: "number", empty: false},
		education: {type: "object", props: {
			school_name: {type: "string", empty: false},
			level: {type: "string", empty: false},
			degree: {type: "string", empty: false},
			start_at: {type: "date", empty: false},
			finish_at: {type: "date", empty: false}
		}},
		work_experience: {type: "object", props: {
			job_title: {type: "string", empty: false},
			company_name: {type: "string", empty: false},
			start_at: {type: "date", empty: false},
			finish_at: {type: "date", empty: false}
		}},
		skills_interstes: {type: "object", props: {
			main_skills: {type: "string", empty: false},
			languages: {type: "string", empty: false},
			computer_technology: {type: "string", empty: false},
			interests: {type: "string", empty: false}
		}}
	};

	var valid = v.validate(req.body,schema);

	if(valid === true) {
			cvs.createCv(req.body, (err) => {
				if(err) {
					res.send(err);
				}
				else {
					res.send(201,"OK");
				}
			});	
	} else {
		res.status(400).send(valid);
	}
	
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