// Chapter # 21 Task = 1
// var firstName = prompt("Enter First name");
// var lastName = prompt("Enter Last name");
// var fullName = firstName + " " + lastName;
// document.write('hello ', fullName);

// Task = 2

// var fvrMobileModel = prompt('Enter Your Favorite Mobile Model');
// var lengthOfModel = fvrMobileModel.length;
// document.write('MY Favorite Phone is : ', fvrMobileModel, '<br>');
// document.write('Length of String : ', lengthOfModel);

//Task  =3  

// var country = "Pakistan";
// var findIndex = country.indexOf('n');
// document.write('String : ', country, "<br>");
// document.write('Index of "n" : ', findIndex);

// Task # 4
// var greeting = "Hello World";
// var getIndex = greeting.lastIndexOf("l");
// document.write(getIndex);

//Task # 5 
// var country = "Pakistani";
// var findIndex = country.charAt(3);
// document.write('String : ', country, "<br>");
// document.write('Character at index 3  : ', findIndex);

// Task # 6
// var firstName = prompt("Enter First name");
// var lastName = prompt("Enter Last name");
// var fullName = firstName.concat(" ", lastName);
// document.write('hello ', fullName);

// Task # 7 
// var city = "Hyderabad";
// var replaceCity  = city.replace("Hyder", "Islam");
// document.write('City ', city, '<br>');
// document.write('After Replacment ', replaceCity);

// Task # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceWord = message.replaceAll(/and/g, '&');
// document.write(replaceWord);

// Task # 9
// var valueString = "472";
// var valueNumber = 472;
// document.write('Value :  ', valueString, '<br>');
// document.write('Type : ', typeof (valueString), '<br>');
// document.write('Value :  ', valueNumber, '<br>');
// document.write('Type:  ', typeof (valueNumber));

// Task 10 
// var userInput = prompt("Enter any Thing to Capitalize");
// var doCapital = userInput.toUpperCase();
// document.write("Upper Case ", doCapital);

//Task 11
// var userInput = prompt("Enter any Thing to make TitleCase");
// var doTitleCase = userInput.charAt(0).toUpperCase() + userInput.substr(1).toLowerCase();
// document.write("Title Case : ", doTitleCase);

// Task 12

// var num = 35.36;
// var number = num + '';
// var res = number.replace('.', '');
// var result = parseInt(res);
// document.write(" Result : ", result);


// Task 13
// var format = /^[a-zA-Z0-9]*$/;
// var firstName = prompt("Enter your  Name");
// var validation = format.test(firstName);
// if (validation == true) {
//     alert("Enter Valid  Name");
// } else {
//     alert("welcome ");
// }

// Task 14
// let Arry = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties']
// var search = prompt('Welcome to ABCB Bakery. What do you want to order');
// var check = Arry.includes(search);
// let index = Arry.indexOf(search);
// if (check === true) {
//     alert('thanks for order this is available at index : ' + index);
// } else {
//     alert('sorry not available');
// }

// Task 15
// var passwrd = prompt('Enter first password');
// var mediumRegex = new RegExp("[^0-9](?=.*[a-zA-Z])(?=.{6,})");
// if (mediumRegex.test(passwrd)) {
//     document.write('good password');
// } else {
//     document.write('Bad password');

// }

// Task 16
// var university = 'University of Karachi';
// var splitString = university.split('');
// for (let index = 0; index < splitString.length; index++) {
//     document.write(splitString[index], '<br>');
// }

// ?Task 17

// var userInput = prompt('Enter anything');
// var lastInput = userInput.charAt(userInput.length - 1);
// document.write('USer Inpcut', userInput, '<br>');
// document.write('Last Character : ', lastInput, '<br>');


// Task 18
// var text = 'the quick brown fox jumps over the lazy dog';
// var txt = (text.match(/the/g) || []).length;
// document.write('The quick brown fox jumps over the lazy dog ', '<br>', 'There are ', txt, ' occurances of word the');


// Chapter 26-30 Task 1
// var num = prompt('enter any number');
// var roundNumb = Math.round(num);
// var floorNumb = Math.floor(num);
// var ceilNumb = Math.ceil(num);
// document.write('Number: ', num ,'<br>');
// document.write('Number after round off : ', roundNumb, '<br>');
// document.write('Number after Floor  : ', floorNumb, '<br>');
// document.write('Number after Ceil  : ', ceilNumb, '<br>');

// Task  2
// var numb = prompt('Enter  any Floating negative number');
// var roundNumb = Math.round(numb);
// var floorNumb = Math.floor(numb);
// var ceilNumb = Math.ceil(numb);
// document.write('Number: ', numb, '<br>', 'Round off Value: ', roundNumb, '<br> ', 'Floor value: ', floorNumb, '<br> ', 'Ceil Value: ', ceilNumb);

// Task 3
// var numb = prompt('Enter  any  negative or positive  number');
// var absoultValue = Math.abs(numb);
// document.write('The Absoult value of Number: ', numb, ' is ', absoultValue);

// Task 4
// var rndmDice = Math.floor(Math.random() * 6) + 1;
// document.write('Random Dice value: ', rndmDice, '<br>');


//Task 5  
// var rndmCoins = Math.floor(Math.random() * 2) + 1;
// if (rndmCoins === 1) {
//     document.write('Random Coin value: Tails ', '<br>', rndmCoins);
// } else {
//     document.write('Random Coin value: Heads ', '<br>', rndmCoins);
// }

// Task 6
// var rndmNumb = Math.floor(Math.random() * 100) + 1;
// document.write('Random number between 1 and 100: ', rndmNumb, '<br>');

// Task 7
// var getWeight = prompt("Enter your Weight in Kilograms");
// var parseWeight = parseFloat(getWeight);
// document.write('The Weight of User is  ', parseWeight, ' kilograms');

//Task 8
// var rndmNumb = Math.floor(Math.random() * 10) + 1;
// var getNum = prompt("Enter nummber between 1 t0 10");
// if (getNum === rndmNumb) {
//     document.write('ongratulations you gussed it');

// } else {
//     document.write('Ohh Try Again');
// }

// Chapter 31  to 34
// Task 1
// var getDate = new Date();
// document.write('Todays Date ', getDate);

// Task 2
// var getDate = new Date();
// var getMonth = getDate.toLocaleString('default', { month: 'long' });
// document.write('Current Month ', getMonth);

// Task 3
// var getDate = new Date();
// var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
//     "Friday", "Saturday")
// document.write("Today is " + weekday[getDate.getDay()]);

//Task 4
// var getDate = new Date();
// var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
//     "Friday", "Saturday")
// var today = weekday[getDate.getDay()];
// if (today === 'Sunday' || 'Saturday') {
//     document.write("IT's a Fun Day ");
// } else {
//     document.write("Working Day :( ");
// }

//Task 5 
// today = new Date();
// var dd = today.getDate();
// if (dd <= 1 || dd <= 15) {
//     document.write(" Fist Fifteen Days of month");
// } else {
//     document.write(" Last Fifteen Days of month");
// }

//Task 6
// var minutes = 1000 * 60;
// var milliseconds = minutes / 60000;
// var today = new Date();
// var assignDate = today.getTime();
// var getminutes = (assignDate / minutes);
// var getmiliSeconds = (assignDate / milliseconds);
// document.write("Current Date ", today, '<br> Elapsed milliseconds since January: ', getmiliSeconds, ' <br> Elapsed minutes Since January: ', getminutes);

// Task 7




//Task 8

// var Today = new Date();
//    Today.
// document.write('Last Date: ');


//Task 13
// var Today = new Date();
// var getDate = prompt("Enter your age ");
// var getUserAge =  getDate.getFullYear()

// var getYear = Today.getUTCFullYear();
// document.write('Last Date: ', getYear, '<br>');
// document.write('Last age: ', getUserAge);

