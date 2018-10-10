var mongoose = require("mongoose");

const options = {
	useNewUrlParser: true
};

var InIt = () => {
	mongoose.connect("mongodb://127.0.0.1:27017/semos", options)
.then ((conn) => {
	console.log("Connected!");
	})
.catch((err) => {
	console.log(err);
	});
};

module.exports = {
	InIt
}