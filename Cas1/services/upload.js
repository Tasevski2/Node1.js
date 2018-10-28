var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('express-jwt');
var fileUpload = require('express-fileupload');
var mongo = require('../db/mongo');
var upload = require('../handlers/upload');
var app = express();
app.use(bodyParser.json());


mongo.Init();

app.use(jwt ({
	secret: "pero_e_citer"	
	}).unless ({
		path: ["/login", "/create/user","/upload"
				// {url: "/login", methods: {"POST"}} vo slucaj ako imame ista 	
				// ruta ali razlicen metod
		]
	})
);

app.use(fileUpload({
	limits: {
		filesize: 50 * 1024 * 1024
	}
}));


app.post("/upload", upload.uploadFile);
app.post("/upload/avatar", upload.uploadAvatar);
app.post("/upload/document", upload.uploadDoc);




app.use(function(err, req, res, next) {
	if(err.name === "UnauthorizedError") {
		res.status(401).send("Invaild token");
	}
});

app.listen(8001);