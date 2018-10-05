var mongoose= require("mongoose");

const options= {
	useNewUrlParser: true
};

var db= null;

var Init= () => {
	mongoose.connect("mongodb://localhost:27017/semso", options)
	.then((conn) {
		db= conn;
	});
	.catch((err) {
		console.log(err);
	});
};

var DB= () {
	if (db!=null) {
		return db;
	}
	else {
		console.error("No mongo connectio to return");
	}
};

module.exports= {
	Init,
	DB
}



