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

app.use(jwt ({
	secret: "pero_e_citer"	
	}).unless ({
		path: ["/login", "/create/user","/upload"
				// {url: "/login", methods: {"POST"}} vo slucaj ako imame ista 	
				// ruta ali razlicen metod
		]
	})
);

mongo.Init();


app.post("/login", auth.login);

app.get("/logout", auth.logout);


app.use(function(err, req, res, next) {
	if(err.name === "UnauthorizedError") {
		res.status(401).send("Invaild token");
	}
});

app.listen(8002);