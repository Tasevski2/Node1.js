var express = require("express");
var users = require ("./handlers/users");
var mongo = require("./db/mongo");
var bodyParser = require("body-parser");
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

mongo.Init();

app.get("/users", users.getAllUsers);
app.get("/users/name/:name", users.getUsersByName);

app.delete("/delete/user/id/:id", users.deleteUser);
app.put("/delete/user/id/:id", users.updateById);

app.post("/create/user", users.createUser);



app.use(function(err, req, res, next) {
	if(err.name === "UnauthorizedError") {
		res.status(401).send("Invaild token");
	}
});

app.listen(8001);