var jwt = require("jsonwebtoken");

var login = (req, res)=>
{
	if(req.body.email == "admin@admin.com" && req.body.password == "admin") {
		var userData = {
			uid: 1234567890,
			email: "admin@admin.com",
			name: "Pero Perovski",
			avatar: "slika.jpg"
		};
		var token = jwt.sign(userData, "pero_e_citer");
		return res.send(200, token);
	} else {
		res.send(404, "Invaild username or password");
	}
};

var logout = (req , res)=>
{
	res.send(req.user);
}

module.exports = {
	login ,
	logout
};