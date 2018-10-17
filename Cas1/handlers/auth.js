var jwt = require("jsonwebtoken");
var users = require("../models/users");
var bcrypt = require("bcryptjs");

var login = (req, res) => {
	users.getUserByEmail(req.body.email, (err, userData) => {
		if(err) {
			return res.status(400).send(err);
		} else {
			console.log(userData.password);
			console.log(req.body.password, userData.password);
			bcrypt.compare(req.body.password, userData.password)
			.then((valid) => { 
				if (valid) {
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
				return res.send(err);
			});
		}
	});
};

var logout = (req , res)=>
{
	res.send(req.user);
}

module.exports = {
	login ,
	logout
};