// ********************** Scope   **********************
// Windows object is root scope
var fun = 5;

function funFunction() {
  // fun varibale is only within the scope of the function and will not change the parent variable of fun.
  //child scope
  var fun = "hello";
  console.log(1, fun);
}

function funnerFunction() {
  // fun varibale is only within the scope of the function and will not change the parent variable of fun.
  //child scope
  var fun = "Goodbye";
  console.log(2, fun);
}

function funestFunction() {
  // since fun is not being created as a new vartiable within the function it is calling from the parent which is window fun variblae.
  //child scope
  fun = "AHHHHHHH!!!";
  console.log(3, fun);
}
// test all scops with functions and non function console log's.
console.log("window", fun);
funFunction();
funnerFunction();
funestFunction();
console.log("new window", fun);

console.log(); // This will create a new line between secions.
// ********************** Advanced Control Flow   **********************
// condition ? exp1 : exp2;     if the condition is then excute exp1 if flase excute exp2.
//"-Ternary operator:if the condition is then excute exp1 if flase excute exp2. "

//exmaple: condition ? exp1 : exp2;
console.log();

function isUserValid(bool) {
  return bool;
}

var isTrue = true;
var answer = isUserValid(isTrue) ? "you may enter" : "Access Denied";
console.log("Here is thge answer while true:  " + answer); // This will test the answer for a true statment.

// we will test it with a fasle statment.
isTrue = false;
answer = isUserValid(isTrue) ? "you may enter" : "Access Denied";
console.log("Here is thge answer while true:  " + answer); // This will test the answer for a true statment.

console.log();
console.log("-Switch Statment: ");

function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "Fall into a river!";
      break;
    case "backwards":
      whatHappens = "got away safely";
      break;
    case "left":
      whatHappens = "ran into troll";
      break;
    case "right":
      whatHappens = "found 100 dollars. ";
      break;
    default:
      whatHappens = "no asnwer inputted!!";
      break;
  }
  return whatHappens;
}

console.log("forward is the input:   " + moveCommand("forward"));
console.log("backwards is the input: " + moveCommand("backwards"));
console.log("left is the input:      " + moveCommand("left"));
console.log("right is the input:     " + moveCommand("right"));
console.log("nothing was inputted:   " + moveCommand());
console.log();

// **********************  ES5 vs Es6 *************************
// ------------------ Let and Var ------------------
//Example One:Shows how using Var will not change scope when using it in a function.
console.log("-------- Using Var while in a fucntion and scope -------- ");
console.log();
var userName = "Jesse";

function testOne() {
  var userName = "Thomas";
  console.log("in the fucntion with var vairable: ", userName);
}
console.log("var varibale before the function call: ", userName);
testOne();
console.log();

//Example Two: using let will allow keywords to be depedent within scope.
console.log("--------  Using Let while in a fucntion and scope -------- ");
console.log();

let newUser = "Jay jay";

function tesTwo() {
  let newUser = "Jim Jone";
  console.log("in the fucntion with var vairable: ", newUser);
}
console.log("var varibale before the function call: ", newUser);
testOne();
console.log();

// ------------------ Deconstructuring  ------------------

const obj = {
  // Creating a Simple object with thre properties and values.
  player: "bobby",
  experince: 100,
  wizardLevel: false,
};
//assigning the objects to a variable.
//const player = obj.player;
//const experince = obj.experince;
//let wizardLevel = obj.wizardLevel;

// with the syntax below you can set variable to the object
const { player, experince } = obj;
let { wizardLevel } = obj;

const name1 = "whats good?";
const a = "Jesse";
const b = true;
const c = {};
const newObj = {
  a,
  b,
  c,
  name1,
};
newObj.c = { time: "7:00am" };
console.log("Object using Deconstructuring: ", newObj.name1);
console.log("Object using Deconstructuring: ", newObj.a);
console.log("Object using Deconstructuring: ", newObj.b);
console.log("Object using Deconstructuring: Time is", newObj.c.time);
console.log();

// ------------------ Templete Strings  ------------------
// Instead of having a indepth string like below.

const greeting = "Hello " + obj.player + ", how are you? " + newObj.name1;
console.log(greeting);
// you can use this syntax instead.
const newGreeting = `Hello ${obj.player}, how are you? ${newObj.name1} .`;
console.log(newGreeting);

function greetingFunction(player = "No input", name = "no input") {
  // pass in name and player with defaul arguments incase nothing is passed in.
  return `Hello ${player}, how are you? ${name} .`;
}
console.log("Calling the function with no parameters: ", greetingFunction());
console.log(
  "Calling the function with one parameter: ",
  greetingFunction("Jesse")
);
console.log(
  "Calling the function with two parameter: ",
  greetingFunction("Jesse", "Whats good??")
);
console.log();

// **********************  Advanced Functions *************************
// ------------------ Arrow Functions  ------------------

function add(a, b) {
  // regular function
  return a + b;
}

const subtract = (a, b) => a - b; // arrow function.
console.log();

// ------------------ Closures   ------------------
//Closures: a function ran, the function excuted, never going to ecute again, but it will remember
//that there are refrences to those varibales, so the child scope will always have access to parent scope.
// Children have acces to parent scope but parents never have access to child scope.

const first = () => {
  // parent scope
  const greet = "hello"; // child scope will never use this function
  const second = () => {
    // child scope
    console.log(
      "This is the second function within first. display message: ",
      greet
    );
  };
  return second;
};

const newFunction = first();
newFunction();
console.log();

// ------------------ Currying   ------------------
// A process of converting a fucntion that takes muple parameters but takes them one at a time
const multiply = (a, b) => a * b;
const curryMulti = (a) => (b) => a * b;
console.log(curryMulti(3)(4));
const bet = 200;
const bonus21 = curryMulti(1.5);
console.log("21 Bonus: " + bonus21(bet));

// **********************  Advanced Arrays  *************************
//example of basic array.
var array = [1, 4, 12, 45, 155, 18, 24, 17, 30, 120, 45];

const changedArray = [];
const newArray = array.forEach((index) => {
  changedArray.push(index * 2);
});
console.log(array);
console.log(changedArray);

//Map: Use map when ever you want loop through an array and take some action.
const mapArray = array.map((num) => {
  return num * 2;
}); // This will loop through the array and return that value.
console.log("Array times 2: ", mapArray);

// We can short hand the above to this.
const map_Array = array.map((num) => num * 3);
console.log("Array times 3: ", mapArray);

//filter:
const filterArray = array.filter((num) => {
  return num % 2 === 0;
});
//short hand version: const filterArray = array.filter(num => num % 2 === 0);
console.log("Filter Array, even numbers: ", filterArray);
//reduce
const reduceArray = array.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log("Reduce Array: ", reduceArray);
console.log();

// **********************  Advanced Objects *************************

// Instantiation
class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Skater extends Player {
  constructor(name, age) {
    super(name, age); // Super will take you up to the constructor of the parent class.
  }
  kickFlip() {
    console.log("Doing a kick flip.");
  }
  popShoveIt() {
    console.log("Doing a pop shove it.");
  }
}

const tonyHawk = new Skater("tony hawk", 45);
tonyHawk.introduce();
tonyHawk.kickFlip();
tonyHawk.popShoveIt();
tonyHawk.name = "jesse"; // changin the name from tony hawk to jesse.
console.log("Changing my name: ", tonyHawk.name);

// **********************  ES7  *************************
const cubeSoemthing = (a) => a ** 3; // new feature
let getCube = cubeSoemthing(2);
console.log(getCube);
// **********************  ES8  *************************
//.pasStart();
console.log("Jesse".padStart(10));
//.padEnd();
console.log("Jesse".padEnd(10) + "10");
// **********************  ES9  *************************
let userNames = {
  //Key: Value,
  username0: "Jesse",
  username1: "Thomas",
  username2: "Jim Jone",
};

//iterating through the object
console.log("objects for usernames: ");
Object.keys(userNames).forEach((key) => {
  console.log(key, userNames[key]);
});

//Object.values
console.log();
console.log("Looping through Objects using the Object.value method:");
Object.values(userNames).forEach((value) => {
  console.log(value);
});
//Object.entries
console.log();
console.log("Looping through Objects using the Object.entries method:");
Object.entries(userNames).forEach((value) => {
  console.log(value);
});

//example for useing Object.entries
const newUsernameArray = Object.entries(userNames).map((value) => {
  return value[1] + value[0].replace("username", "");
});
console.log("creating a new array of usernames: ", newUsernameArray);
console.log();

// **********************  ES10  *************************
//array.flat()
const flatArray = [
  ["Jesse", "marquez"],
  ["Thomas", "marquez"],
  ["Jim Jone", "marquez"],
];
let expandedArray = flatArray.flat();
console.log(`Flatening the array: ${expandedArray}`);

// adds first name and last name to each objet in the array,
const addMetaData = flatArray.flatMap((info) => {
  const newInfo = `First Name: ${info[0]} / Last Name: ${info[1]}`;
  return newInfo;
});

console.log(addMetaData);

//trimEnd() and trimStart()
let email1 = "         jmarquez1134@gmail.com";
let email2 = "jmarquez1134@gmail.com       ";

email1 = email1.trimStart();
email2 = email1.trimEnd();
console.log(`Formatted email: ${email1}\nFormatted email: ${email2}`);

// from object.fromEntries() and object.entries()

const nameObject = Object.fromEntries(flatArray);
console.log("array to object: ", nameObject);

console.log("Conver back to array", Object.entries(nameObject));
// **********************  ES2020 *************************
