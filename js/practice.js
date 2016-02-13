
var myDiv = document.createElement('div') // create new div element
	myDiv.className = 'greeting' //add some classssss
var myImg = document.createElement('img') // create new img tag 
	myImg.className = 'wickerman' //add some class to this otherwise horrible movie?

	var myText = document.createTextNode('Hello there.') //create new text node to go inside of new div element
		myDiv.appendChild(myText) //append var 2 to var 1
	 //add some class to your div

	myImg.setAttribute('src',  'http://cdn.indiewire.psdops.com/dims4/INDIEWIRE/1b2e436/2147483647/crop/397x280%2B31%2B0/resize/325x227%3E/quality/90/?url=http%3A%2F%2Fdl9fvu4r30qs1.cloudfront.net%2F94%2F16%2F7a7859784982a6eff7bd3f8a6c41%2Fresizes%2F500%2Fthe-wicker-man-masks.jpg')
	//set attribute for img tag

	addHere.appendChild(myDiv) //append the above to the body
	addHere.appendChild(myImg) //append to body





// //1. how to use .length, .reverse, .sort, .push, .pop, and .unshift

// var horrorMovies = ['hellraiser', 'exorcist', 'scream', 'the descent']
// console.log(horrorMovies.length)
// //to scroll thru entire ray, all you need is to use the name of the array and .length
// for(i = 0; i < horrorMovies; i++) {
// 	console.log(horrorMovies[i])
// }

// console.log(horrorMovies.reverse())  // reverses order


// console.log(horrorMovies.sort()) // will sort in alpha if a string of words, but not with numbers.


// //.push() - pushes new data into array // useful for adding more info into object or using new user data
// horrorMovies.push('rosemary"s baby')
// console.log(horrorMovies)

// //.pop removes last item in array

// horrorMovies.pop()
// console.log(horrorMovies)

// //unshift - adds it FRONT of array, affects first element of array
// horrorMovies.shift()
// console.log(horrorMovies)
// horrorMovies.unshift("")


//Create a function that registers user on previous login application

var objPeople = [
	{
		username: 'reagan',
		password: 'exorcist'
	},
	{	username: 'sidney',
		password: 'ghostface'
	},
	{
		username: 'rosemary',
		password: 'antichrist'
	}
]

//log-in functionality
function login() {

//retrieve user data from form input
var username = document.getElementById('username').value
var password = document.getElementById('password').value

//loop thru the user objects and confirm if username and password are correct
//function to run on click that stores the user info based on inputs, run thru loop to see if match
for (i = 0; i < objPeople.length; i++) {
	if (username == objPeople[i].username && password == objPeople[i].password) {
		console.log(username + ' is logged in!')
		return
	}
}

console.log('wrong username or password!')
}




//Project: Create a function that registers a user on your previous login application. Make sure it's on the same page and doesn't refresh when clicked, since we're not storing the data yet. test to ensure that the username is not already taken and that the password is at least 8 characters
function registerUser() {

	var registerUser = document.getElementById('newUser').value
	var registerPassword = document.getElementById('newPassword').value

//push whole new object by creating new variable array
	var newUser = {  //whatever the new user enters!
		username: registerUser,
		password: registerPassword
	}


//loop thru every single user to see if match
	for(i = 0; i < objPeople.length; i++) {
		//check if new user name choice matches pre-existing users
		if (registerUser == objPeople[i].username) {
			alert('that username is taken! please choose another.')
			return //stop function
			//check if pw is 8 characters or more
		} else if (registerPassword.length < 8 ) {
			alert('that password is too short, try again')
			return // stop function
		}
	}
//push new object to objPeople array
	objPeople.push(newUser)
//console the update
	console.log(objPeople)
}






