exports.toLowerUser = function (userName)
{	
	return userName.toLowerCase();

	
}

exports.validatorPass = function (password)
{
	if(password.length >= 6) 
		return true;
	else
		return false;
}

function validatorEmailvn (email)
{	
	if(email.includes("@") && email.endsWith(".com"))
		return true;
	else
		return false;
}

exports.vrednost_email = function(email)
{
	if(validatorEmail(email))
		return "Tocen email";
	else
		return "Gresen email";
}

exports.validatorEmail = function(email)
{	
	if(email.includes("@") && email.endsWith(".com"))
		return true;
	else
		return false;
}









	//moja rabota
// exports.validatorEmail2 = function(email)
// {	
	
// 	if(!email.includes("@"))	
// 		console.log("Vi fali \"@\"");
// 	if(!email.endsWith(".com"))
// 		console.log("Vi fali \".com\"");
	
// }

