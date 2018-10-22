var jwt = require("jsonwebtoken");
var users = require("../models/users");
var bcrypt = require("bcryptjs");
var validator = require("fastest-validator");
var  v = new validator();


var login = (req, res) => {
	users.getUserByEmail(req.body.email, (err, userData) => {
		var schema = {
			email: {type: "email", empty: false},
			password: {type: "string", empty: false}
		}
		
		var valid = v.validate(req.body,schema);

		if(valid === true) {
			bcrypt.compare(req.body.password, userData.password)
			.then((valid_pass) => { 
				if (valid_pass) {
					var ud = {
						uid: userData._id,
						email: userData.email,
						name: userData.name,
						role: userData.role
					};
					var token = jwt.sign(ud, "pero_e_citer");
					return res.send(token);
				} else {
					return res.status(403).send("Unauthorized");
				}
			}).catch((err) => {
			return res.status(500).send(err);
			})		
		} else {
			return res.status(400).send(valid);
		}
	});			
	
};

var logout = (req , res)=> {
	res.send(req.user);
}

module.exports = {
	login ,
	logout
};