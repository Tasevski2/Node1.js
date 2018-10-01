var express = require("express");
var auth = require ("./handlers/auth");
var root = require ("./handlers/root");
var users = require ("./handlers/users");
var mongo = require("./db/mongo");

var app = express();

mongo.Init();

app.get("/", root);

app.post("/login", auth.login);

app.get("/logout", auth.logout);

app.get("/users", users.getAllUsers);
app.get("/users/name/:name", users.getUsersByName);

app.listen(8080);