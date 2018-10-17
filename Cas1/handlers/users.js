var users = require("../models/users");
var bcrypt = require("bcryptjs");


var getAllUsers = (req , res) => {
	console.log("get all users")
	users.getAllUsers((err, data) => {
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

var getUsersByEmail = (req, res) => {
	users.getUsersByEmail(req.body.email, (err, data) => {
		if(err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
}


var createUser = (req, res) => {
	 
	
	var valid = req.body.firstname != "" && req.body.firstname != ""
	 && req.body.lastname != "" && req.body.lastname != ""
	 && req.body.email != "" && req.body.email != ""
	 && req.body.password.length > 6 && req.body.password != undefined && req.body.password != "";
	
	 
	if(valid && req.body.email != users.getUsersByEmail) {
		console.log("Do tuka");	
		bcrypt.hash(req.body.password, 10, (err, hash) => {
			var userData = req.body
			userData.password = hash;
			userData.role = "user";
			users.createUser(userData, (err) => {
				if(err) {
					res.send(err);
				} else {
					console.log("Vleguva")
					res.send(201, "Ok");
				}
			})
		})	
	}
	else {
		res.send(400, "Bad request");
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

var updateById = (req,res) =>{
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
	getUsersByEmail

};

