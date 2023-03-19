console.log("Hello Class")

// chapter 21-25

// Ques-1

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")
// var fullName = firstName +  " " +lastName;
// alert("How Are You Mr. " + " " + fullName)

//Ques-2
// var favouritePhone = prompt("Enter Your Favourite Phone Model")
// var New = "My favourite phone is :" + " " + favouritePhone;
// document.write(New +"<br/>");
// document.write(New.length)

// Ques-3
// var nationality = "Pakistani";
// document.write(nationality+ "<br />");
// document.write(nationality.indexOf("n"))

//Ques-4

// var str = "Hello World";
// document.write(str + "<br  />");
// document.write(str.lastIndexOf("l"));

// Ques-5

// var nationality = "Pakistani";
// var charAtIndex3 = nationality.charAt(3);
// document.write("Character at index 3 is : " + "" +charAtIndex3)


//Ques-6

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(lastName);
// document.write(fullName);

//Ques-7

// var originalWord = "Hyderabad";
// document.write("City: " + originalWord + "<br  />");

// var newWord = originalWord.replace("Hyder","Islam")
// document.write("After replacement:  " + newWord);

//Ques-8

// var Str = "Ali and Sami are best friends. They play cricket and football together";
// var NewStr = Str.replace(/and/g,"&" );
// document.write(NewStr);

//Ques-9

// var str = "472";
// document.write("Value:" + str+"<br  />");
// document.write(typeof str +"<br   />");
// var num = Number(str);
// document.write("Value:" + num+"<br  />");
// document.write(typeof num +"<br   />");

//Ques-10

// var input = "peanuts";
// document.write("User input:" + input+"<br   />");
// var New = input.toUpperCase();
// document.write("UPPER CASE:" + New);


//Ques-11
// var input = "javascript";
// document.write("User input:" + input+"<br   />");
// var New = input.charAt(0).toUpperCase()+input.slice(1);
// document.write("CAPATILIZE:" + New);

//Ques-12

// var num = 35.36;
// document.write("Number:" + num +"<br  />")

// var str = num.toString().replace(".", "");

// document.write("Result: " + str);

//Ques-13

// var userName = prompt("Enter your username");

// if(userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")){
//     alert(" Please enter a valid username")
// }
// else{
//     document.write("The user name is : "+ userName)
// }

//Ques -14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var item = prompt("Enter an item to search")

// var isMatch =false;
// for(var i=0;i<A.length;i++){
//     if(A[i].toLocaleLowerCase() === item.toLocaleLowerCase()){
//         isMatch=true;
//         break;
//     }
// }
// if(isMatch){
//     alert(item + "is available at index " + i + " in our bakery ")
// }
// else{
//     alert("We are sorry " +item +" is not available in our bakery ")
// }

//Ques-15



//Ques-16

// var university = "University of Karachi";

// var array = university.split(" ");
// document.write(array +"<br />");


// for (var i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br>");
// }

//Question-17

// var userInput = prompt("Enter a string:");

// var lastChar = userInput.charAt(userInput.length - 1);

// document.write("The last character of the input is: " + lastChar);

//Ques-18

// Define the string
// var string = "The quick brown fox jumps over the lazy dog";

// string = string.toLowerCase();

// var count = (string.match(/the/g) || []).length;

// document.write("The word 'the' appears " + count + " times in the string.");


//chapter 26-30

// Ques-1

// var num = prompt("Enter a positive integer:");

// if (num > 0) {
//   document.write("Number: " + num + "<br>");
  
//   var rounded = Math.round(num);
//   document.write("Round off value: " + rounded + "<br>");
  
//   var floored = Math.floor(num);
//   document.write("Floor value: " + floored + "<br>");
  
//   var ceiled = Math.ceil(num);
//   document.write("Ceil value: " + ceiled);
// } else {
//   alert("Invalid input! Please enter a positive integer.");
// }

//Ques-2


// var num = parseFloat(prompt("Enter a negative floating point number:"));

// document.write("Number: " + num + "<br>");

// var roundOff = Math.round(num);
// document.write("Round off value: " + roundOff + "<br>");

// var floorValue = Math.floor(num);
// document.write("Floor value: " + floorValue + "<br>");

// var ceilValue = Math.ceil(num);
// document.write("Ceil value: " + ceilValue + "<br>");


//Ques-3

// var num = +prompt("Enter a number:");

// var absoluteValue = Math.abs(num);

// document.write("The absolute value of " + num + " is " + absoluteValue);


//Ques-4

// var diceValue = Math.floor(Math.random() * 6)+ 1;

// document.write("Random dice value: " + diceValue+"<br  />");
// var diceValue = Math.floor(Math.random() * 6)+ 1;

// document.write("Random dice value: " + diceValue);

//Ques-5


// var coinValue = Math.floor(Math.random() * 2);
// document.write(coinValue+"<br  />")

// if (coinValue === 0) {
//   document.write("The coin shows heads.");
// } else {
//   document.write("The coin shows tails.");
// }


//Ques-6

// var randomNumber = Math.floor(Math.random() * 100) + 1;

//       document.write("The random number between 1 and 100 is: " + randomNumber);


//Ques-7


//Ques-8

// var secretNumber = Math.floor(Math.random() * 10) + 1;

//       var userInput = prompt("I'm thinking of a number between 1 and 10. Can you guess it?");
//       if (parseInt(userInput) === secretNumber) {
//         document.write("Congratulations! You guessed the number!");
//       } else {
//         document.write("Sorry, that's not the number I'm thinking of. The number was " + secretNumber + ".");
//       }

//chapter 31-34

//Ques-1

// var currentDate = new Date();

//       var date = currentDate.toDateString();
//       var time = currentDate.toLocaleTimeString();

//       document.write("Today is " + date + " and the current time is " + time + ".");

//Ques-2

// var currentDate = new Date();

//       var monthIndex = currentDate.getMonth();

//       var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//       var monthName = monthNames[monthIndex];

//       document.write("The current month is " + monthName + ".");

//Ques-3

// var currentDate = new Date();

//       var dayIndex = currentDate.getDay();

//       var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//       var dayName = dayNames[dayIndex];

//       alert("Today is " + dayName + ".");

//Ques-4


// var currentDate = new Date();

// var dayIndex = currentDate.getDay();

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var dayName = dayNames[dayIndex];

// if (dayName === "Saturday" || dayName === "Sunday") {
//   document.write("It's Fun day!");
// } else {
//   document.write("Sorry, it's not Fun day.");
// }

//Ques-5

// var currentDate = new Date();

//       var date = currentDate.getDate();

//       if (date < 16) {
//         document.write("First fifteen days of the month.");
//       } else {
//         document.write("Last days of the month.");
//       }

//Ques-6

// var currentDate = new Date();

//       var millisecondsSince1970 = currentDate.getTime();

//       var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

//       document.write("Minutes since Jan. 1, 1970: " + minutesSince1970);

//Ques-7

// var currentDate = new Date();

//       var hour = currentDate.getHours();

//       if (hour < 12) {
//         alert("It's AM");
//       } else {
//         alert("It's PM");
//       }

//Ques-8

// var lastDayOf2020 = new Date("December 31, 2020");

//       var laterDate = lastDayOf2020;

//       document.write("Later date: " + laterDate);

//Ques-9


// var startRamadan = new Date("March 25, 2023");

//       var firstRamadan = new Date("June 18, 2015");

//       var daysSinceFirstRamadan = Math.floor((startRamadan.getTime() - firstRamadan.getTime()) / (1000 * 60 * 60 * 24));

//       document.write("Days since 1st Ramadan: " + daysSinceFirstRamadan);

//Ques-10

// var referenceDate = new Date();

//       var beginningOf2015 = new Date("January 1, 2015");

//       var secondsElapsed = Math.floor((referenceDate.getTime() - beginningOf2015.getTime()) / 1000);

//       document.write("Seconds elapsed between reference date and beginning of 2015: " + secondsElapsed);

//Ques-11

// var currentDate = new Date();

//       var currentHours = currentDate.getHours();

//       currentDate.setHours(currentHours + 1);

//       document.write("Current date and time: " + currentDate);

//Ques-12

// var currentDate = new Date();

//       currentDate.setFullYear(currentDate.getFullYear() - 100);

//       document.write("Date 100 years back: " + currentDate);

//Ques-13

// var age = prompt("Please enter your age:");

//       var currentYear = new Date().getFullYear();
//       var birthYear = currentYear - age;

//       document.write("Your birth year is: " + birthYear);

//Ques-14


      