var express = require("express");
var auth = require ("./handlers/auth");
var root = require ("./handlers/root");
var users = require ("./handlers/users");

var mongoose = require("mongoose");
var app = express();
const options = {
  useNewUrlParser: true
}
mongoose.connect("mongodb://127.0.0.1:27017/semos1", options)
.then((conn)=>
{
	console.log(conn);
})
.catch((err)=>
{
	console.log(err);
})

console.log(db);

app.get("/",root);

app.post("/login" , auth.login);

app.get("/logout" , auth.logout);

app.get("/users" , users.getAllUsers);

app.listen(8080);