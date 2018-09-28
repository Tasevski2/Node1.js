// var sentence = "Ucime Javascript";
// var word = "Javascript";



// console.log(sentence.includes(word));
// console.log(sentence.startsWith(word));
// console.log(sentence.endsWith(word));


// var myModule = require("./my-module");

// myModule.sayHello();

// var mathModule = require("./math-module");

// console.log(mathModule.soberi(5,6));
// console.log(mathModule.pomnozi(5,6));


// var username = "VIKTOR";
// var password = "1234567";
// var email = "viktor-tasevskihotmail.com";

// var validator = require("./validator");

// console.log(validator.toLowerUser(username));

// console.log(validator.validatorPass(password));

// console.log(validator.validatorEmail(email));


// if(validator.validatorPass(password))
// 	console.log("Vnesete podolg password.");
// else
// 	console.log("Dolzinata za passwordot e zadovolena.");

// console.log(validator.vrednost_email(email));





	//moja rabota
// if(validator.validatorEmail(email))
// 	console.log("Dobar vi e emailot");
// else
// 	validator.validatorEmail2(email);


var fs = require("fs");

//rabota so fs modul

// fs.readFile("myFile.txt","UTF-8", (err, data)=>
// {	
// 	if(err)
// 	 throw err;
// else
// {
// 	console.log(data);
// }

// })

// fs.writeFile("myFile2.txt", "Pisuvam vo sublime",(err)=>
// {
// 	if(err)
// 		throw err;
// 	else
// 		console.log("Uspesno zapisano");
// })


// fs.appendFile("myFile.txt" , "\n appended text" ,(err)=>{
// 	if(err)
// 		throw err;
// 	else
// 		console.log("text added!")
// });


fs.readFile("users.json","UTF-8" , (err,data)=>{
	
	var name = "Gorjan"
	

	if(err) 
		throw err;
	

	else
	{	
		var exists = false;

		var parseJSON = JSON.parse(data);
		for(let i = 0;i<parseJSON.length; i++)
		{
			if(parseJSON[i].name == name)
			{
				console.log("Name: " + parseJSON[i].name + "\n" + "Lastname: " + parseJSON[i].lastname + "\n" + "Email: " + parseJSON[i].email + "\n" + "Password: " + parseJSON[i].password);
				exists = true;
				break;
			}
		
		}

		if(exists==false)
			console.log("Ne postoi takov korisnik.");

	}
});


