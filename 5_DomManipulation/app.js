// These notes about DOM Manipulations


// **************************************    DOM Selectors  **************************************

document.getElementsByTagName("h1"); // this will select a tag
document.getElementsByClassName("second")[0];// with class name we will have to select the index you want. 
document.getElementById("first"); // This will get and ID with specfic Id. 

//Query Selectors
document.querySelector("h1"); // This will select the first h1 tag it sees. 
document.querySelectorAll("li"); // This will select all li tags
document.querySelector("li"); // this will only get the top most li it sees. 
//another Example Case
document.querySelectorAll("ul, li");

console.log("Everything is working so far no break!!!"); // test to ensure no bug or break occured. 

//Set and Get attributes
document.querySelector("li").getAttribute("random"); //returns 23
document.querySelector("li").setAttribute("random", "1000"); // random = 1000 and not be 23 anymore

//Adding classes to a variable html tag and changing the css. 
var h1 = document.querySelector("h1"); // This created an h1 within the h1 varibale. 
h1.className = "coolTitle"; // This will add a class to the h1. 

// Classlist: not supported by all browsers. 
document.querySelector("li").classList.add("coolTitle"); // This will select the li and add a class tot he li tag
document.querySelector("li").classList.remove("coolTitle"); // This will remove a class from a selected querty. 
document.querySelector("li").classList.toggle("coolTitle."); // This will toggle between // This will create a on off setup. 

//Inner HTML
document.querySelector("h1");
document.querySelector("h1").innerHTML = "<h1>Todo List</h1>"; // This will create a new html tag over the old one. 

// Allways remember to Cache selectors in variables. Exmaples below. 
var ul = document.querySelector("ul");


// **************************************    DOM EVENTS  **************************************

var button = document.getElementById("enter"); // This will hold a vairable to represent button. 
var input = document.getElementById("userinput"); // this will hold the userinmput from the id userinput
var ul = document.querySelector("ul"); // Variable that holds the ul quuery selctor. 

function createListElement () { // This function will be used to append an li with a text node to a UL
  var li = document.createElement("li"); // variable to hold the li tag
  li.appendChild(document.createTextNode(input.value)); // this adds a text node to li. li is parent of text node. 
  ul.appendChild(li); // this appends the li with the text node to the ul parent. 
  console.log("Added " + input.value + " to the list!")
  input.value = "";
}

function inputLength () {
  return input.value.length;
}

// function will wait for a click and check input if pass will create an li and add li/text node to the ul. 
function addListAfterClick () {
  if (inputLength() > 0 ) {
    createListElement();
  }
}

//function will check the paratmete of keypress and determine if it was enter than call the creat list function. 
function addListAfterKeypress (keyevent) {
  if (inputLength() > 0 && keyevent.code === "Enter") {
    createListElement();
  }
}

//button event listener: this will append an li with a text node to ul : add and li with text to the list
button.addEventListener('click', addListAfterClick );
input.addEventListener('keypress', addListAfterKeypress ); //creates a event for the input add when a keypress is made that even will be a parameter within the functions. 




