var mongoose = require("mongoose");

var CVs = mongoose.model(
	"cvs",
	new mongoose.Schema({
		"firts_name": String,
		"last_name": String,
		"birth_date": Date,
		"email": String,
		"phone": String,
		"current_residence": {
			"country": String,
			"city": String,
			"zip_code": Number
		},
		"education": {
			"school_name": String,
			"level": String,
			"degree": String,
			"start_at": Date,
			"finish_at": Date
		},
		"work_experience": {
			"job_title": String,
			"company_name": String,
			"start_at": Date,
			"finish_at": Date
		},
		"skills_interstes": {
			"main_skills": String,
			"languages": String,
			"computer_technology": String,
			"interests": String
		}
	}) 
);


var getAllCvs = (cb) => {
	CVs.find({}, (err, data) => {
		if(err) {
			return cb(err, null);
		}
		else {
			return cb(null, data);
		}
	});
};

var createCv = (CvData, cb) => {
	var cv = new CVs(CvData);
	cv.save((err, data) => {
		if(err) {
			return cb(err, null);
		}
		else {
			return cb(null, null);
		}
	});
};

var deleteCvById = (id, cb) => {
	CVs.deleteMany({_id: id}, (err) => {
		if(err) {
			return cb(err)
		} else {
			return cb(null);
		}
	});
}

var getCvBySchool = (school, cb) => {
	CVs.find({"education.school_name": school}, (err,data) => {
		if(err) {
			return cb(err, null);
		}
		else {
			return cb(null, data);
		}
	});
};

var updateById = (id, data, cb) => {
	CVs.updateOne({_id: id}, data, (err) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(data);
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