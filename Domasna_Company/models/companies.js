var mongoose = require("mongoose");

var Company = mongoose.model(
	"companies",
	new mongoose.Schema ({
        "company_name": String,
        "company_manager": String,
        "company_email": String,
        "company_phone": String,
        "company_size": Number,
        "company_web_site": String,
        "company_sector": String,
        "company_headquaters": {
            "country": String,
            "city": String,
            "zip_code": Number
        }
           
})

	);



var getAllCompanies = (cb) => {
	Company.find({}, (err, data) => {
		if(err) {
			return cb(err, null);
		}
		else {
			return cb(null, data);
		}
	});
};

var createCompany = (CompanyData, cb) => {
	var company = new Company(CompanyData);
	company.save((err) => {
		if(err) {
			return cb(err);
		}
		else
			return cb(null);
	});
};

var deleteByID = (id, cb) => {
	Company.deleteOne({_id: id}, (err) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(null);
		}
	});
};

var updateById = (id, companyData, cb) => {
	Company.updateOne({_id: id}, companyData, (err) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(null);
		}
	});
};

var getCompaniesBySector = (sector, cb) => {
	Company.find({company_sector: sector}, (err, data) => {
		if(err) {
			return cb(err);
		}
		else {
			return cb(data);
		}
	});
};

module.exports = {
	getAllCompanies,
	createCompany,
	deleteByID,
	updateById,
	getCompaniesBySector
}