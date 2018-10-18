var users = require("../models/users");
var bcrypt = require("bcryptjs");



var getAllUsers = (req , res)=> {
	users.getAllUsers((err , data)=>
	{
		if(err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
	
};

var getUsersByName = (req, res) => {
	var name = req.params.name;
	users.getUsersByName(name, (err, data) => {
		if(err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
}


var createUser = (req, res) => {
	var valid = req.body.firstname != undefined && req.body.firstname != ""
	 && req.body.email != undefined && req.body.email != ""
	 && req.body.lastname != undefined && req.body.lastname != ""
	 && req.body.email != undefined && req.body.email != ""
	 && req.body.password.length > 6 && req.body.password != undefined && req.body.password != "";
	
	if(valid) {	
		users.getUsersByEmail(req.body.email, (err, data) => {
			console.log(req.body.email);
			// console.log("TUka treba" + data.email);
			if(err) {
				res.send(err);
			} else {
				if(req.body.email != data.email) {
					bcrypt.hash(req.body.password, 10, (err, hash) => {
						 if(err) {
							 res.send(err);
						 } else {
							var userData = req.body
							userData.password = hash;
							userData.role = "user";
							users.createUser(userData, (err) => {
								if(err) {
									res.send(err);
								} else {
									res.status(201).send("Ok");
								}
							});
						 }
						
					});
				} else {
					res.send("The email is already taken!")
				}
			}
		});
		
	} else {
		res.status(400).send("Bad request");
	};
	
};

var deleteUser = (req, res) => {
	var id= req.params.id;
	users.deleteUser(id, (err) => {
		if (err) {
			res.send(err);
		} else {
			res.send(204, "Deleted");
		}
	});
};

var updateById = (req,res) => {
	var id = req.params.id;
	var userData = req.body;
	users.updateById(id, userData, (err) => {
		if(err) {
			res.send(500, err);
		} else {
			res.send(201, "OK");
		}
	});
}
module.exports = {
	getAllUsers,
	getUsersByName,
	createUser,
	deleteUser,
	updateById,
	

};

