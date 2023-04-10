// Variables
console.log("Javascript Notes: Basic");
console.log();
console.log("******** Variables *********");

var firstName = "Jesse";
let lastName = "Marquez";
let isTrue = false;
console.log("Hello, " + firstName + " " + lastName);

// Comparison's / Control Flow
console.log();
console.log("******** Control Flow *********");
let firstNumber = 10;
let secondNumber = 5;
//result: first number is greater than the second number.
if (firstNumber > secondNumber) {
  console.log("First number is Greater than second number");
  console.log(firstNumber);
} else {
  console.log("Second number is larger");
}

// Test numbers to check. result: they are the same numbers
firstNumber = 10;
secondNumber = 10;
if (firstNumber !== secondNumber) {
  console.log(firstNumber + " Does not equal second number");
} else {
  console.log("They are the same number");
}

// Test numbers to check.  result: they are differnet numbers
firstNumber = 10;
secondNumber = 5;
if (firstNumber === secondNumber) {
  console.log(firstNumber + " Does equal second number");
} else {
  console.log("they are differnet numbers");
}
let password = "Classic";

//let userInput = "classic";
let userInput = "root";
let root = "root";

if (password === userInput || userInput === root) {
  console.log("password matches");
} else {
  console.log("Password is incorrect. ");
}

// Functions
console.log();
console.log("******** Functions  *********");

var age1 = 100; //prompt("Enter your age!!!");
console.log("Checking Drivers age agian. ");
let varification = checkAge(age1);
console.log(varification);

function checkAge(ageOfDriver) {
  if (Number(ageOfDriver) < 18) {
    if (age <= 0) {
      //alert("Not a Valid number");
      return "Not a Valid number";
    } else {
      //alert("Sorry, you are too young to drive this car. Powering off");
      return "Sorry, you are too young to drive this car. Powering off";
    }
  } else if (Number(ageOfDriver) === 18) {
    //alert("Congratulations on your first year of driving. Enjoy the ride!")
    return "Congratulations on your first year of driving. Enjoy the ride!";
  } else {
    if (Number(ageOfDriver) >= 70) {
      //alert("Don't forget your glasses! Enjoy the ride.");
      return "Don't forget your glasses! Enjoy the ride.";
    } else {
      //alert("Powering On. Enjoy the ride!");
      return "Powering On. Enjoy the ride!";
    }
  }
}

// Example Code:
// Make an keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
var age2 = 18; //prompt("What is your age?");

if (Number(age2) < 18) {
  console.log("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age2) > 18) {
  alert("Powering On. Enjoy the ride!");
} else if (Number(age2) === 18) {
  console.log("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge() {
  var age = 22; //prompt("What is your age?");
  if (Number(age) < 18) {
    console.log("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age) > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (Number(age) === 18) {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride!"
    );
  }
}
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
var checkDriverAge2 = function () {
  var age3 = prompt("What is your age?");
  if (Number(age3) < 18) {
    console.log("Sorry, you are too yound to drive this car. Powering off");
  } else if (Number(age3) > 18) {
    console.log("Powering On. Enjoy the ride!");
  } else if (Number(age3) === 18) {
    console.log(
      "Congratulations on your first year of driving. Enjoy the ride!"
    );
  }
};

//BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// checkDriverAge(92);
// it returns "Powering On. Enjoy the ride!"
function checkDriverAge(age) {
  if (Number(age) < 18) {
    return "Sorry, you are too yound to drive this car. Powering off";
  } else if (Number(age) > 18) {
    return "Powering On. Enjoy the ride!";
  } else if (Number(age) === 18) {
    return "Congratulations on your first year of driving. Enjoy the ride!";
  }
}

// Data Structures: Arrays
console.log();
console.log("******** Datastructures: Arrays *********");

var list = ["Tiger", "cat", "bear", "Bird"];
console.log("Array section " + list[0]);

var list2 = [
  ["Tiger", "cat", "bear", "Bird"],
  ["dog", "frog", "chicken", "blackbird"],
  ["Tiger", "cat", "bear", "Bird"],
];
console.log("Array section part 2 " + list2[1]);

//array functions  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.log(list);
list.shift();
console.log(list);

// Data Structures: Objects  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
// 2. Create an array which contains the object you have made above and name the arry "database"
console.log();
console.log("******** Datastructures: Objects *********");

var database = [
  {
    username: "andrei",
    password: "supersecret",
  },
];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!",
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!",
  },
  {
    username: "Mitch",
    timeline: "Javascript is preeetyy cool!",
  },
];

let userOne = "andrei";
//let passwordOne = "supersecret"; // test: right password
let passwordOne = "chekcjen"; // test: wrong password
console.log("Checking Password and user name. ");

function signIn(userName, password) {
  if (userName === database[0].username && password === database[0].password) {
    console.log("Password & Username Matched. Showing Timeline!!!!!");
    console.log("************ Timeline **********");
    console.log(newsfeed);
  } else {
    console.log("Wrong username or password. ");
  }
}

signIn(userOne, passwordOne);

// Java Script terminaology
console.log();
console.log("************** Javascript terminology *************");

// function declaration
function newFunction() {
  console.log("Function declaration");
}

//function expression
var newFunc = function () {
  console.log("new function");
};

//function vs method
function thisIsAFunction() {
  console.log("This is a function!!!");
}
thisIsAFunction();

var someObject = {
  thisIsAMthod: function () {
    console.log("This ia  method, a function within an object. ");
  },
};
someObject.thisIsAMthod();

// Javascrit Loops:
console.log();
console.log("************* JavaScript Loops *************");
var todoList = [
  "Clean room",
  "pow pow lishey",
  "take out the trash",
  "poop on bed",
];

var todoListImportant = [
  "Clean room",
  "pow pow lishey",
  "take out the trash",
  "poop on bed",
  "Clean room",
  "pow pow lishey",
  "take out the trash",
  "Clean room",
  "pow pow lishey",
  "take out the trash",
];
let toDoListLength = todoList.length;
console.log("for loop used to see throuhg the array above. \n");

for (var i = 0; i < toDoListLength; i++) {
  console.log(todoList[i]); // This will display all items in the array.
  //todoList.pop(); // This will delete an item in teh array.
  //todoList[i] =  todoList[i] + " !!"; // This will add !! to the words in teh array.
}
console.log("What is the in the array?");
console.log(todoList);
console.log();
console.log("To do list below using for each");
todoList.forEach(function (todo, index) {
  console.log(todo, index);
});

//fucntion that will log out array and index which is used for the foreach menthod.
console.log();
console.log("New list of toos with newly created function. ");
function logTodoLost(arrayList, index) {
  console.log(arrayList, index);
}

todoListImportant.forEach(logTodoLost);
