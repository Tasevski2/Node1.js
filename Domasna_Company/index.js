var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongo = require("./db/mongo");
var companies = require("./handlers/companies");
app.use(bodyParser.json());

mongo.InIt();

app.get("/companies", companies.getAllCompanies);

app.post("/companies/create", companies.createCompany);

app.delete("/companies/id/:id", companies.deleteByID);

app.put("/companies/update/:id", companies.updateById);

app.get("/companies/:sector", companies.getCompaniesBySector);


app.listen(80);
