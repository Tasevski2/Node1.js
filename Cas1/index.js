var express = require("express");
var auth = require ("./handlers/auth");
var root = require ("./handlers/root");
var users = require ("./handlers/users");
var mongo = require("./db/mongo");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

mongo.Init();

app.get("/", root);

app.post("/login", auth.login);

app.get("/logout", auth.logout);

app.get("/users", users.getAllUsers);
app.get("/users/name/:name", users.getUsersByName);

app.delete("/delete/user/id/:id", users.deleteUser);
app.put("/delete/user/id/:id", users.updateById);

app.post("/create/user", users.createUser);

app.listen(8080);