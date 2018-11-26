<<<<<<< HEAD
var express = require("express");
var auth = require ("./handlers/auth");
var mongo = require("./db/mongo");
var fileUpload = require ("express-fileupload");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var jwt = require("express-jwt");


app.use(fileUpload({
	limits: {filesize: 50 * 1024 * 1024}
}));
=======
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var mongo = require('../db/mongo');
var auth = require('../handlers/auth');

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


app.post("/login", auth.login);

app.get("/logout", auth.logout);


=======
app.post("/login", auth.login);
app.get("/logout", auth.logout);

>>>>>>> 93b643e4b5950333a3c97860589fb70585a03f72
app.use(function(err, req, res, next) {
	if(err.name === "UnauthorizedError") {
		res.status(401).send("Invaild token");
	}
});

<<<<<<< HEAD
=======

>>>>>>> 93b643e4b5950333a3c97860589fb70585a03f72
app.listen(8002);