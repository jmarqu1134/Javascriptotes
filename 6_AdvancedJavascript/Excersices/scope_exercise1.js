/**
 * Excersices for the application.
 */

//                                         "Scope Excersises"

// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  console.log(a);
} // answer: 3

//#2
// you must first run q2() in your console to add the new value. then run q22()
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  console.log(a);
} // answer: 5

// run in the console:
// q22() -- 0
// q2() -- undefined
// q22() -- 5

//#3
function q3() {
  window.a = "hello";
}

function q32() {
  console.log(a);
} // answer: "hello"

//#4
var a = 1;
function q4() {
  var a = "test";
  console.log(a);
} //Answer: "test"

//#5
var a = 2;
if (true) {
  var a = 5;
  console.log(a); //answer: 5
}
console.log(a); // answer: 5
