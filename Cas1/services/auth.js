var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var mongo = require('../db/mongo');
var auth = require('../handlers/auth');

mongo.Init();

var app = express();
app.use(bodyParser.json());

app.use(jwt ({
	secret: "pero_e_citer"	
	}).unless ({
		path: ["/login", "/create/user","/upload"
				// {url: "/login", methods: {"POST"}} vo slucaj ako imame ista 	
				// ruta ali razlicen metod
		]
	})
);

app.post("/login", auth.login);
app.get("/logout", auth.logout);

app.use(function(err, req, res, next) {
	if(err.name === "UnauthorizedError") {
		res.status(401).send("Invaild token");
	}
});


app.listen(8002);