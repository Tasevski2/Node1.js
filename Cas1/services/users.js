<<<<<<< HEAD
var express = require("express");
var users = require ("./handlers/users");
var mongo = require("./db/mongo");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());




=======
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var mongo = require('../db/mongo');
var users = require('../handlers/users');

mongo.Init();

var app = express();

app.use(bodyParser.json());
>>>>>>> 93b643e4b5950333a3c97860589fb70585a03f72
app.use(jwt ({
	secret: "pero_e_citer"	
	}).unless ({
		path: ["/login", "/create/user","/upload"
				// {url: "/login", methods: {"POST"}} vo slucaj ako imame ista 	
				// ruta ali razlicen metod
		]
	})
);

<<<<<<< HEAD
mongo.Init();

app.get("/users", users.getAllUsers);
app.get("/users/name/:name", users.getUsersByName);

app.delete("/delete/user/id/:id", users.deleteUser);
app.put("/delete/user/id/:id", users.updateById);

app.post("/create/user", users.createUser);



=======
app.get("/users", users.getAllUsers);
app.get("/users/name/:name", users.getUsersByName);
app.delete("/delete/user/id/:id", users.deleteUser);
app.put("/delete/user/id/:id", users.updateById);
app.post("/create/user", users.createUser);

>>>>>>> 93b643e4b5950333a3c97860589fb70585a03f72
app.use(function(err, req, res, next) {
	if(err.name === "UnauthorizedError") {
		res.status(401).send("Invaild token");
	}
});

<<<<<<< HEAD
app.listen(8001);
=======
app.listen(8003);
>>>>>>> 93b643e4b5950333a3c97860589fb70585a03f72
