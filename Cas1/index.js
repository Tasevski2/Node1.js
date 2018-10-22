var express = require("express");
var auth = require ("./handlers/auth");
var root = require ("./handlers/root");
var users = require ("./handlers/users");
var mongo = require("./db/mongo");
var fileUpload = require ("express-fileupload");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
var jwt = require("express-jwt");
var bcrypt = require("bcryptjs");
var upload = require("./handlers/upload")

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

app.get("/", root);

app.post("/login", auth.login);

app.get("/logout", auth.logout);

app.get("/users", users.getAllUsers);
app.get("/users/name/:name", users.getUsersByName);

app.delete("/delete/user/id/:id", users.deleteUser);
app.put("/delete/user/id/:id", users.updateById);

app.post("/create/user", users.createUser);

app.post("/upload", upload.uploadFile);


app.use(function(err, req, res, next) {
	if(err.name === "UnauthorizedError") {
		res.status(401).send("Invaild token");
	}
});

app.listen(80);



