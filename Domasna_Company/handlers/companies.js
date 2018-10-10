var companies = require("../models/companies");

var getAllCompanies = (req, res) => {
	companies.getAllCompanies((err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
};

var createCompany = (req, res) => {
	var CompanyData = req.body;
	companies.createCompany(CompanyData,(err) => {
		if(err){
			res.send(err);
		}
		else {
			res.send(201, "Company created");
		}
	});
};

var deleteByID = (req, res) => {
	var id = req.params.id;
	companies.deleteByID(id, (err) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send("Deleted");
		}
	});
};

var updateById = (req,res) => {
	var id = req.params.id;
	var companyData = req.body;
	companies.updateById(id, companyData, (err) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send("Updated");
		}
	});
};

var getCompaniesBySector = (req, res) => {
	var sector = req.params.sector;
	companies.getCompaniesBySector(sector, (err, data) => {
		if(err) {
			res.send(err);
		}
		else {
			res.send(data);
		}
	});
};

module.exports = {
	getAllCompanies,
	createCompany,
	deleteByID,
	updateById,
	getCompaniesBySector			
};