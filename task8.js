/* ----------------- TASK 8 --------------------
Write a function that takes one argument, a person's name.

If the name is longer than 24 characters, it should return 'Name too long.'

Otherwise it should simply return the name.

Set up your function and save any results you need in variables.
----------------------------------------------- */


function nameLength(name){

	pname = name.length;

	if(pname > 24){
		return "Name too long"
	} else {
		return name
	}
}


var result = nameLength("bob");
var result2 = nameLength("Cordelia Franchesca Alexandra Pamplemousse");

console.log('***************** TASK 8 ******************');
console.log('If the name is Bob, the result is: ' + result);
console.log('If the name is Cordelia Franchesca Alexandra Pamplemousse, the result is: ' + result2);
