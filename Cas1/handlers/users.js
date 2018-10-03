var users = require("../models/users");


var getAllUsers = (req , res)=>
{
	users.getAllUsers((err , data)=>
	{
		if(err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
	
};


var getUserByName = (req ,res) => {
	var name = req.params.name;
	res.send(name);
}

var getUsersByName = (req, res) => {
	var name = req.params.name;
	users.getUsersByName(name, (err, data) => 
	{
		if(err) {
			res.send(err);
		} else {
			res.send(data);
		}
	});
}

var createUser = (req, res) => {
	users.createUser(req.body, (err) =>
	{
		if(err) {
			res.send(err);
		} else {
			res.send(201, "Ok");
		}
	});
}

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
	getUserByName,
	getUsersByName,
	createUser,
	deleteUser,
	updateById

};

