var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongo = require("./db/mongo");
var users = require("./handlers/users");
app.use(bodyParser.json());


mongo.Init();

app.get("/users", users.getAllUsers);

app.post("/users/create", users.createUser);

app.delete("/users/delete/id/:id", users.deleteUserById);


app.get("/users/school/:school", users.getUserBySchool);

app.put("/users/update/id/:id", users.updateById);









app.listen(8080);