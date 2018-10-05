var express = require("express");
var app = express();
var bodyPar = require("body-parser");
var mongo = require("./db/mongo");
var users = require("./handlers/users");



var mongo.Init();

app.get("/users", users.getAllUsers);

app.post("/users/create", users.createUser);

app.delete("/users/delete/country/:country", users.deleteUserByCountry);


app.get("/users/university/:university", users.getUserByUniversity);

app.put("/users/update/id/:id", users.updateById);









app.listen(8080);