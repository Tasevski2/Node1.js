var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongo = require("./db/mongo");
var cvs = require("./handlers/cvs");
app.use(bodyParser.json());


mongo.Init();

app.get("/cvs", cvs.getAllCvs);

app.post("/cvs/create", cvs.createCv);

app.delete("/cvs/delete/id/:id", cvs.deleteCvById);


app.get("/cvs/school/:school", cvs.getCvBySchool);

app.put("/cvs/update/id/:id", cvs.updateById);









app.listen(80);