// var funkcija1 = (ime , prezime, cb) =>
// {
// 	console.log(ime , prezime);
// 	var ip= ime+prezime;
// 	cb(ip);
// };


// var i = "Pero";
// var p= "Perovsi";

// // funkcija1(i, p, ()=>
// // 	{
// // 		console.log("Zdravo")
// // 	});


// var cb1 = (imePrezime) =>
// {
// 	console.log("cb1: " ,imePrezime);
// };

// funkcija1(i, p, function(impr)
// 	{
// 		console.log(impr);
// 			});









// var getUsers = (cb) =>
// {
// 	//povik do baza
// 	//prezemanje na korisnicite vo niza 
// 	var users = [
// 	"janko",
// 	"petko" ,
// 	"stanko" ,
// 	"stojanko"
// 	];
// 	cb(users);
// };


// var render = (u)=>
// {
// 	console.log(u);
// };
// var total = 0;
// var calculate = (u)=>
// {
// 	for(let i=0;i<u.length;i++)
// 		total +=u[i].length;
// 	console.log(total);
// }

// getUsers(render);
// getUsers(calculate);













// var condition = true;

// var getAllUsers = () =>
// {
// 	return new Promise((resolve , reject)=>
// 	{
// 		var users = 
// 		[
// 			"janko",
// 			"petko" ,
// 			"stanko" ,
// 			"stojanko"
// 		];
// 		if(condition)
// 		{
// 			return resolve(users);
// 		}
// 		else
// 			return reject("no users found");
// 	});
// };

// getAllUsers()
// .then((u)=>
// {
// 	console.log(u);
// })
// .catch((err)=>
// {
// 	console.error(err);
// });	











var Hrana = (jadenje) => {
	 return new Promise((resolve, reject) => {
		if(jadenje.length % 2 == 0) {
			return resolve(jadenje);
		}
		else {
			return reject(jadenje);
		}
	});
};
var a = "pitar";
Hrana(a)
.then((odg) => {
	console.log(odg + " e ubava");
})
.catch((odg) => {
	console.log(odg + " ne e ubava");
})




































// var getUsers = (cb)=>
// {
// 	var users =
// 	[
// 	"viktor",
// 	"jana",
// 	"nesko",
// 	"tasevski"
// 	]

// 	cb(users);
// };


// var max_length = (users)=>
// {	
// 	let max = users[0].length;
// 	for(let i=1;i<users.length;i++)
// 		{
// 			if(users[i].length>max)
// 				max = users[i];
// 		}
// 	console.log(max);
// }

// var min_length = (users)=>
// {
// 	let min = users[0].length;
// 	for(let i=1;i<users.length;i++)
// 	{
// 		if(users[i].length<min)
// 			min = users[i];
// 	};

// 	console.log(min);
// };


// getUsers(max_length);
// getUsers(min_length);