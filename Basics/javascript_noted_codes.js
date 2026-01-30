/*
JavaScript Complete Notes with Methods and Loops
-------------------------------------------------

Table of Contents:
- Topic 1: JavaScript Syntax and Structure
- Topic 2: JavaScript Variables
- Topic 3: JavaScript Input and Output
- Topic 4: JavaScript Arithmetic Operators
- Topic 5: JavaScript Comparison Operators
- Topic 6: JavaScript Logical Operators
- Topic 7: JavaScript if-else Statements
- Topic 8: JavaScript Functions
- Topic 9: JavaScript Arrays
- Topic 10: JavaScript Strings and Methods
- Topic 11: JavaScript Regular Expressions (Regex)
- Topic 12: JavaScript Switch Statements
- Topic 13: JavaScript Loops
- Topic 14: JavaScript Objects
- Topic 15: JavaScript Events and Event Listeners
- Topic 16: The return Statement in JavaScript
- Topic 17: Function Invocation (Calling Functions)
- Topic 18: Global and Local Scope
- Topic 19: Variable Hoisting in JavaScript
- Topic 20: REST API Calls and Accessing JSON
- Topic 21: JSON Key Translation
*/

/*----------------------------------------------------------
Topic 1: JavaScript Syntax and Structure
------------------------------------------------------------
- Statements end with semicolons (;)
- Comments: // single-line, /* multi-line */
/*- Variables: var (function-scoped), let (block-scoped), const (constant)
- Reserved keywords: if, else, for, while, function, etc.
*/

/* Example */
let greeting = "Hello, World!";
console.log(greeting);

/*----------------------------------------------------------
Topic 2: JavaScript Variables
------------------------------------------------------------
- Data types: String, Number, Boolean, Null, Undefined
- Naming rules: start with letter/_/$, no spaces, case-sensitive
- Use descriptive names, camelCase convention
*/

/* Example */
let name1 = "Alice";
let age = 25;
let isStudent = true;
const pi = 3.14159;

/*----------------------------------------------------------
Topic 3: JavaScript Input and Output
------------------------------------------------------------
- prompt() collects input (string)
- Use parseInt(), parseFloat(), Number() for numeric input
- console.log() displays output
- Template literals (`${var}`) allow string interpolation
*/

/* Example */
let userName = prompt("Enter your name:");
console.log(`Hello, ${userName}!`);

/*----------------------------------------------------------
Topic 4: JavaScript Arithmetic Operators
------------------------------------------------------------
- +, -, *, /, %, **, ++, --, +=, -=, *=, /=, **=
- Math functions: Math.floor(), Math.ceil(), Math.round(), Math.random(), Math.max(), Math.min()
*/

/* Example */
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // 15
console.log(num1 ** num2); // 100000

/*----------------------------------------------------------
Topic 5: JavaScript Comparison Operators
------------------------------------------------------------
- Strict equality (===), strict inequality (!==)
- Loose equality (==), loose inequality (!=)
- Greater than (>), >=, Less than (<), <=
*/

/* Example */
console.log(5 === "5"); // false
console.log(5 == "5");  // true
console.log(10 > 5);    // true

/*----------------------------------------------------------
Topic 6: JavaScript Logical Operators
------------------------------------------------------------
- AND (&&), OR (||), NOT (!)
- Precedence: ! > && > ||
*/

/* Example */
let a = true;
let b = false;
console.log(a && b); // false
console.log(a || b); // true
console.log(!b);     // true

/*----------------------------------------------------------
Topic 7: JavaScript if-else Statements
------------------------------------------------------------
- if, else if, else
- Nested if statements allowed
*/

/* Example */
let age2 = 20;
if(age2 < 18){
    console.log("Minor");
} else if(age2 <= 30){
    console.log("Young Adult");
} else {
    console.log("Adult");
}

/*----------------------------------------------------------
Topic 8: JavaScript Functions
------------------------------------------------------------*/
//- Function declaration: function name(params) { ... }
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Alice")); // Hello, Alice

//- Function expression: const fn = function() { ... }
const greet = function(name) {
    return `Hello, ${name}`;
};
console.log(greet("Bob"));

//- Arrow function: const fn = (params) => { ... }
const greet = (name) => `Hello, ${name}`;
console.log(greet("Charlie"));

//- Parameters and arguments
function sum(a, b = 0){ // Default parameter
    return a + b;
}
console.log(sum(5, 10)); // 15
console.log(sum(7));     // 7

//- Return values: return
function multiply(a, b) {
    return a * b;
}
let result = multiply(4,5);
console.log(result); // 20

//- Scope: global vs local
//- Hoisting applies to function declarations and var
console.log(add(2,3)); // 5
function add(a,b){ return a+b; }

    // console.log(x); // Error
    let x = 10;


/*----------------------------------------------------------
Topic 9: JavaScript Arrays
------------------------------------------------------------*/
//- Array creation: []
//- Access: array[index]
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple

//- Add/remove: push(), pop(), shift(), unshift(), splice()
fruits.push("Orange");      // Add to end
fruits.pop();               // Remove from end
fruits.shift();             // Remove from start
fruits.unshift("Grapes");  // Add to start
fruits.splice(1,1,"Kiwi"); // Replace starting at index 1, remove 1

//- Searching: indexOf(), includes(), find(), findIndex()
fruits.indexOf("Mango"); // 2
fruits.includes("Apple"); // true
fruits.find(x => x.length > 4); // Finds first element with length > 4
fruits.findIndex(x => x === "Banana"); // 1

//- Iteration/transformation: forEach(), map(), filter(), sort(), reverse(), join()
fruits.map(x => x.toUpperCase()); // ["APPLE","GRAPES","KIWI","MANGO"]
fruits.filter(x => x.startsWith("M")); // ["Mango"]
fruits.forEach(x => console.log(x)); // Prints each fruit
fruits.sort(); // Sort alphabetically
fruits.reverse(); // Reverse order
fruits.join(", "); // "Mango, Kiwi, Grapes, Apple"

//- Other: concat(), slice(), some(), every(), flat()
fruits.concat(["Pineapple", "Papaya"]); // Merge arrays
fruits.slice(1,3);  // ["Kiwi","Mango"]
fruits.some(x => x.length > 5); // true if any element > 5 chars
fruits.every(x => x.length > 3); // true if all elements > 3 chars
fruits.flat(); // Flatten nested arrays


/*----------------------------------------------------------
Topic 10: JavaScript Strings and Methods
------------------------------------------------------------
Strings are sequences of characters used to represent text in JavaScript. 
JavaScript provides a rich set of built-in string methods to manipulate, 
analyze, and transform strings. Understanding these methods is crucial 
for text processing and dynamic content manipulation.
*/

/*----------------------------------------------------------
Creating Strings
------------------------------------------------------------*/
let str1 = "Hello";
let str2 = 'World';
let str3 = `Template Literal Example: ${str1} ${str2}`; // Template literals

console.log(str1, str2, str3);

/*----------------------------------------------------------
Basic String Properties
------------------------------------------------------------*/
console.log(str1.length); // 5 - length of the string
console.log(str1[0]);     // 'H' - first character
console.log(str1.charAt(1)); // 'e' - character at index 1

/*----------------------------------------------------------
Changing Case
------------------------------------------------------------*/
console.log(str1.toUpperCase()); // "HELLO"
console.log(str2.toLowerCase()); // "world"

/*----------------------------------------------------------
Trimming and Removing Whitespace
------------------------------------------------------------*/
let str4 = "   JavaScript   ";
console.log(str4.trim());       // "JavaScript"
console.log(str4.trimStart());  // "JavaScript   "
console.log(str4.trimEnd());    // "   JavaScript"

/*----------------------------------------------------------
Searching and Extracting
------------------------------------------------------------*/
let str5 = "JavaScript Programming";

// includes() - checks if substring exists
console.log(str5.includes("Script")); // true

// indexOf() - position of first occurrence
console.log(str5.indexOf("Script")); // 4

// lastIndexOf() - position of last occurrence
console.log(str5.lastIndexOf("a")); // 3

// startsWith() / endsWith()
console.log(str5.startsWith("Java")); // true
console.log(str5.endsWith("ing"));    // true

// substring() - extract substring
console.log(str5.substring(0, 10)); // "JavaScript"

// slice() - similar to substring but supports negative indices
console.log(str5.slice(-11)); // "Programming"

/*----------------------------------------------------------
Replacing and Modifying
------------------------------------------------------------*/
let str6 = "I love JavaScript";

// replace() - replaces first occurrence
console.log(str6.replace("JavaScript", "JS")); // "I love JS"

// replaceAll() - replaces all occurrences
let str7 = "dog cat dog";
console.log(str7.replaceAll("dog", "fox")); // "fox cat fox"

// repeat() - repeats string
console.log("Ha!".repeat(3)); // "Ha!Ha!Ha!"

/*----------------------------------------------------------
Splitting and Joining
------------------------------------------------------------*/
let csv = "apple,banana,orange";
let fruits1 = csv.split(","); // splits string into array
console.log(fruits); // ["apple","banana","orange"]

let joined = fruits.join(" | "); // joins array into string
console.log(joined); // "apple | banana | orange"

/*----------------------------------------------------------
Extracting Characters
------------------------------------------------------------*/
let str8 = "Hello World";
console.log(str8.charAt(0)); // 'H'
console.log(str8.charCodeAt(0)); // 72 - ASCII/Unicode code

/*----------------------------------------------------------
Comparing Strings
------------------------------------------------------------*/
let s1 = "apple";
let s2 = "banana";
console.log(s1 === s2); // false
console.log(s1.localeCompare(s2)); // -1 (s1 comes before s2)

/*----------------------------------------------------------
Other Useful Methods
------------------------------------------------------------*/
// concat() - combine strings
console.log(s1.concat(" ", s2)); // "apple banana"

// padStart() / padEnd() - pad strings with characters
console.log(s1.padStart(10, "*")); // "*****apple"
console.log(s2.padEnd(10, "."));   // "banana...."

// match() - matches regex pattern
let sentence = "The quick brown fox";
console.log(sentence.match(/o/g)); // ["o", "o"]

// search() - find position of regex match
console.log(sentence.search(/fox/)); // 16

// split into array of words
let words = sentence.split(" ");
console.log(words); // ["The", "quick", "brown", "fox"]

// slice and substring for subtext
console.log(sentence.slice(4, 9)); // "quick"
console.log(sentence.substring(4, 9)); // "quick"


/*----------------------------------------------------------
Topic 11: JavaScript Regular Expressions (Regex)
------------------------------------------------------------*/

/*----------------------------------------------------------
Creating Regular Expressions
------------------------------------------------------------*/
// Using literal syntax
let regex1 = /abc/;

// Using constructor syntax
let regex2 = new RegExp("abc");

console.log(regex1.test("abcdef")); // true
console.log(regex2.test("123abc")); // true

/*----------------------------------------------------------
Common Regex Patterns
------------------------------------------------------------*/

// 1. Match digits (\d) - [0-9]
let digits = "My number is 12345";
console.log(digits.match(/\d+/g)); // ["12345"]

// 2. Match non-digits (\D)
console.log(digits.match(/\D+/g)); // ["My number is "]

// 3. Match word characters (\w) - [A-Za-z0-9_]
let word = "user_name123";
console.log(word.match(/\w+/g)); // ["user_name123"]

// 4. Match non-word characters (\W)
console.log(word.match(/\W+/g)); // null (no special chars here)

// 5. Match whitespace (\s) and non-whitespace (\S)
let text = "Hello World";
console.log(text.match(/\s/g)); // [" "] - space
console.log(text.match(/\S/g)); // ["H","e","l","l","o","W","o","r","l","d"]

// 6. Anchors: ^ (start of string), $ (end of string)
let str = "Hello";
console.log(/^H/.test(str)); // true - starts with H
console.log(/o$/.test(str)); // true - ends with o

// 7. Optional, Zero or more, One or more
let testStr = "color colour colouur";
console.log(testStr.match(/colou?r/g)); // ["color", "colour"] - u is optional
console.log(testStr.match(/colou*/g));  // ["color", "colour", "colouur"] - u zero or more
console.log(testStr.match(/colou+/g));  // ["colour", "colouur"] - u one or more

// 8. Character sets [ ]
let vowels = "JavaScript";
console.log(vowels.match(/[aeiou]/gi)); // ["a","a","i"] - all vowels, case-insensitive

// 9. Ranges [a-z], [0-9]
let lettersAndNumbers = "a1b2c3";
console.log(lettersAndNumbers.match(/[a-c]/g)); // ["a","b","c"]
console.log(lettersAndNumbers.match(/[1-3]/g)); // ["1","2","3"]

// 10. Alternation (OR) using | 
let colors = "red blue green";
console.log(colors.match(/red|green/g)); // ["red", "green"]

// 11. Quantifiers {n}, {n,}, {n,m}
let repeated = "ha ha haaaa haaa";
console.log(repeated.match(/ha{2}/g));   // ["haa", "haa"]
console.log(repeated.match(/ha{2,3}/g)); // ["haa", "haaa", "haa"]
console.log(repeated.match(/ha{1,}/g));  // ["ha","ha","haaa","haa"]

/*----------------------------------------------------------
Regex Flags
------------------------------------------------------------*/
// g - global (match all)
let sample = "abc abc abc";
console.log(sample.match(/abc/g)); // ["abc","abc","abc"]

// i - case-insensitive
console.log(sample.match(/ABC/i)); // ["abc"]

// m - multiline
let multi = `line1
line2
line3`;
console.log(multi.match(/^line2$/m)); // ["line2"]

/*----------------------------------------------------------
Replacing using Regex
------------------------------------------------------------*/
let sentence1 = "The rain in Spain";
console.log(sentence.replace(/ain/g, "ane")); // "The rane in Spane"

// Remove all whitespace
let spaced = "  hello  world  ";
console.log(spaced.replace(/\s+/g, "")); // "helloworld"

/*----------------------------------------------------------
Validating Patterns
------------------------------------------------------------*/
// Example: Simple email validation
let email = "user@example.com";
let emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
console.log(emailRegex.test(email)); // true

// Example: US phone number validation (format: 123-456-7890)
let phone = "123-456-7890";
let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
console.log(phoneRegex.test(phone)); // true

// Example: Password must have at least 6 chars, 1 digit, 1 uppercase
let password = "MyPass1";
let passRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;
console.log(passRegex.test(password)); // true

/*----------------------------------------------------------
Topic 12: JavaScript Switch Statements
------------------------------------------------------------
- switch(expression) { case x: ... break; default: ... }
- Allows multi-way branching
*/

/* Example */
let day = "1";
switch(day){
    case "0": console.log("Sunday"); break;
    case "1": console.log("Monday"); break;
    default: console.log("Invalid day"); break;
}

/*----------------------------------------------------------
Topic 13: JavaScript Loops
------------------------------------------------------------
- for: iterate a known number of times
- while: loop while condition is true
- do-while: execute at least once
- for...of: iterate array values
- for...in: iterate object keys
- forEach(): iterate arrays
*/

/* Example: for loop */
for(let i=0;i<5;i++){
    console.log("For loop:", i);
}

/* Example: while loop */
let j = 0;
while(j < 5){
    console.log("While loop:", j);
    j++;
}

/* Example: do-while loop */
let k = 0;
do{
    console.log("Do-While loop:", k);
    k++;
} while(k < 5);

/* Example: for...of loop */
let arr = ["a","b","c"];
for(const letter of arr){
    console.log("for...of:", letter);
}

/* Example: for...in loop (objects) */
let obj = {name:"Alice", age:25};
for(const key in obj){
    console.log(`Key: ${key}, Value: ${obj[key]}`);
}

/* Example: forEach() */
arr.forEach((val, idx) => console.log(`Index ${idx}: ${val}`));

/*----------------------------------------------------------
Topic 14: JavaScript Objects
------------------------------------------------------------
Objects are collections of key-value pairs (properties and methods).
Objects are fundamental to JavaScript and used to group related data and functions.
*/

/*----------------------------------------------------------
Creating Objects
------------------------------------------------------------*/

// Object literal (most common)
let person = {
  name: "Alice",
  age: 25,
  city: "New York",
  isStudent: true
};
console.log(person);

// Accessing properties - dot notation
console.log(person.name); // "Alice"
console.log(person.age);  // 25

// Accessing properties - bracket notation
console.log(person["name"]); // "Alice"
console.log(person["city"]); // "New York"

// Adding new properties
person.email = "alice@example.com";
person["phone"] = "123-456-7890";

// Modifying properties
person.age = 26;
person.city = "Boston";

// Deleting properties
delete person.phone;

/*----------------------------------------------------------
Methods in Objects
------------------------------------------------------------*/
// Functions inside objects are called methods
let calculator = {
  num1: 10,
  num2: 5,
  add: function() {
    return this.num1 + this.num2;
  },
  subtract: function() {
    return this.num1 - this.num2;
  },
  multiply() {  // Shorthand syntax
    return this.num1 * this.num2;
  },
  divide: () => {
    return this.num1 / this.num2; // Arrow functions don't bind 'this'
  }
};

console.log(calculator.add());      // 15
console.log(calculator.subtract()); // 5
console.log(calculator.multiply()); // 50

/*----------------------------------------------------------
'this' Keyword in Objects
------------------------------------------------------------*/
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  getInfo: function() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
};
console.log(car.getInfo()); // "Toyota Camry (2023)"

/*----------------------------------------------------------
Constructor Functions (Function Constructors)
------------------------------------------------------------*/
function User(name, email) {
  this.name = name;
  this.email = email;
  this.isActive = true;
  this.greet = function() {
    return `Hello, I'm ${this.name}`;
  };
}

let user1 = new User("Bob", "bob@example.com");
let user2 = new User("Charlie", "charlie@example.com");

console.log(user1.name);    // "Bob"
console.log(user1.greet()); // "Hello, I'm Bob"

/*----------------------------------------------------------
Object Methods (Static Methods)
------------------------------------------------------------*/

// Object.keys() - get all keys
let student = { name: "David", age: 20, gpa: 3.8 };
console.log(Object.keys(student)); // ["name", "age", "gpa"]

// Object.values() - get all values
console.log(Object.values(student)); // ["David", 20, 3.8]

// Object.entries() - get key-value pairs
console.log(Object.entries(student)); // [["name", "David"], ["age", 20], ["gpa", 3.8]]

// Object.assign() - copy/merge objects
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Object.create() - create object with specific prototype
let parent = { greet: function() { return "Hello"; } };
let child = Object.create(parent);
child.name = "Eve";
console.log(child.name);    // "Eve"
console.log(child.greet()); // "Hello"

// Object.freeze() - prevent modifications
let frozen = { x: 10 };
Object.freeze(frozen);
frozen.x = 20; // Fails silently in non-strict mode
console.log(frozen.x); // 10 (unchanged)

// Object.seal() - allow property modification, prevent add/delete
let sealed = { y: 20 };
Object.seal(sealed);
sealed.y = 30; // OK
sealed.z = 40; // Fails silently
console.log(sealed); // { y: 30 }

/*----------------------------------------------------------
Destructuring Objects
------------------------------------------------------------*/

// Basic destructuring
let book = { title: "JavaScript Guide", author: "John", pages: 500 };
let { title: book_Title, author: book_Author } = book;
console.log(bookTitle);  // "JavaScript Guide"
console.log(bookAuthor); // "John"

// Renaming properties during destructuring
let { title: bookTitle, author: bookAuthor } = book;
console.log(bookTitle);  // "JavaScript Guide"

// Default values
let { title, isbn = "N/A" } = book;
console.log(isbn); // "N/A"

// Nested destructuring
let company1 = {
  name: "TechCorp",
  location: { city: "San Francisco", country: "USA" }
};
let { name, location: { city } } = company1;
console.log(city); // "San Francisco"

/*----------------------------------------------------------
Spread Operator with Objects
------------------------------------------------------------*/

// Spread to copy objects
let original = { x: 1, y: 2 };
let copy = { ...original };
console.log(copy); // { x: 1, y: 2 }

// Spread to merge objects
let defaults = { theme: "light", lang: "en" };
let userPrefs = { theme: "dark" };
let settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: "dark", lang: "en" }

// Add new properties with spread
let user_info = { name: "Frank", age: 30 };
let updatedUser = { ...user_info, email: "frank@example.com" };
console.log(updatedUser); // { name: "Frank", age: 30, email: "frank@example.com" }

/*----------------------------------------------------------
ES6 Classes
------------------------------------------------------------*/

// Class declaration
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  static info() {
    return "This is an Animal class";
  }
}

let dog = new Animal("Buddy", "Dog");
console.log(dog.speak()); // "Buddy makes a sound"
console.log(Animal.info()); // "This is an Animal class"

// Class inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }

  getBreed() {
    return `${this.name} is a ${this.breed}`;
  }
}

let myDog = new Dog("Max", "Golden Retriever");
console.log(myDog.speak());      // "Max barks"
console.log(myDog.getBreed());   // "Max is a Golden Retriever"

/*----------------------------------------------------------
Prototypes and Prototype Chain
------------------------------------------------------------*/

// Prototype properties/methods
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.getType = function() {
  return `This is a ${this.type}`;
};

let car1 = new Vehicle("Car");
console.log(car1.getType()); // "This is a Car"

// Check if object has property
console.log(car1.hasOwnProperty("type")); // true
console.log(car1.hasOwnProperty("getType")); // false (it's inherited)

// Check if property/method exists in prototype chain
console.log("getType" in car1); // true

// Prototype chain
function Car(type, brand) {
  Vehicle.call(this, type); // Call parent constructor
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getInfo = function() {
  return `${this.brand} ${this.type}`;
};

let myCar = new Car("Sedan", "Toyota");
console.log(myCar.getType());  // "This is a Sedan" (inherited from Vehicle)
console.log(myCar.getInfo());  // "Toyota Sedan"

/*----------------------------------------------------------
Checking Object Types
------------------------------------------------------------*/

// typeof operator
console.log(typeof {});           // "object"
console.log(typeof []);           // "object" (arrays are objects)
console.log(typeof null);         // "object" (quirk in JS)

// instanceof operator
console.log(dog instanceof Animal); // true
console.log(dog instanceof Dog);    // false (dog is Animal, not Dog)

// Object.prototype.toString()
console.log(Object.prototype.toString.call({}));   // "[object Object]"
console.log(Object.prototype.toString.call([]));   // "[object Array]"
console.log(Object.prototype.toString.call(null)); // "[object Null]"

/*----------------------------------------------------------
Getters and Setters
------------------------------------------------------------*/

let account = {
  _balance: 1000, // Convention: _ indicates private property
  
  get balance() {
    return this._balance;
  },
  
  set balance(amount) {
    if (amount > 0) {
      this._balance = amount;
    } else {
      console.log("Invalid amount");
    }
  }
};

console.log(account.balance); // 1000 (getter)
account.balance = 2000;        // setter
console.log(account.balance); // 2000

/*----------------------------------------------------------
JSON and Objects
------------------------------------------------------------*/

// Convert object to JSON string
let person2 = { name: "Grace", age: 28, city: "Chicago" };
let json_String = JSON.stringify(person2);
console.log(json_String); // '{"name":"Grace","age":28,"city":"Chicago"}'

// Convert JSON string to object
let json_Data = '{"name":"Henry","age":35}';
let parsedObj = JSON.parse(json_Data);
console.log(parsedObj.name); // "Henry"

/*
========================================================
Topic 15: JavaScript Events and Event Listeners
========================================================

JavaScript makes web pages interactive using EVENTS.
An event is an action that happens in the browser such as
clicking a button, typing on the keyboard, or submitting a form.

An EVENT LISTENER waits for an event to happen and then runs code.

Common Events:
- click      → when user clicks an element
- mouseover  → when mouse enters an element
- mouseout   → when mouse leaves an element
- keydown    → when a key is pressed
- keyup      → when a key is released
- submit     → when a form is submitted
- load       → when the page finishes loading

Basic Syntax:
element.addEventListener("event", function);

Example: Click Event
--------------------------------------------------------
HTML:
<button id="btn">Click Me</button>

JavaScript:
let button = document.getElementById("btn");

button.addEventListener("click", function () {
    console.log("Button was clicked!");
});

Using Named Functions:
--------------------------------------------------------
function showMessage() {
    alert("Hello!");
}

let btn = document.getElementById("btn");
btn.addEventListener("click", showMessage);

The Event Object:
--------------------------------------------------------
document.addEventListener("click", function (event) {
    console.log(event.type);    // click
    console.log(event.target);  // element clicked
});

Preventing Default Behavior:
--------------------------------------------------------
let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submission stopped");
});
*/


/*
========================================================
Topic 16: The return Statement in JavaScript
========================================================

The RETURN statement sends a value back from a function
and stops the function execution.

Syntax:
function name() {
    return value;
}

Example:
--------------------------------------------------------
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8

Without return:
--------------------------------------------------------
function multiply(a, b) {
    a * b;
}

console.log(multiply(2, 3)); // undefined

Correct version:
--------------------------------------------------------
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6
*/


/*
========================================================
Topic 17: Function Invocation (Calling Functions)
========================================================

Calling a function means executing it.

Example:
--------------------------------------------------------
function greet() {
    console.log("Hello!");
}

greet(); // function call

Calling Functions Inside Other Functions:
--------------------------------------------------------
function sayHi() {
    console.log("Hi");
}

function startProgram() {
    sayHi();
    console.log("Program started");
}

startProgram();
*/


/*
========================================================
Topic 18: Global and Local Scope
========================================================

SCOPE determines where variables can be accessed.

Global Scope:
--------------------------------------------------------
let name = "Aly";

function showName() {
    console.log(name);
}

showName(); // Aly

Local Scope:
--------------------------------------------------------
function showAge() {
    let age = 20;
    console.log(age);
}

showAge();       // 20
console.log(age); // Error (age is local)
*/


/*
========================================================
Topic 19: Variable Hoisting in JavaScript
========================================================

Hoisting means JavaScript moves declarations to the top
before code execution.

Hoisting with var:
--------------------------------------------------------
console.log(x);
var x = 5;

Interpreted as:
var x;
console.log(x); // undefined
x = 5;

Hoisting with let and const:
--------------------------------------------------------
console.log(y);
let y = 10; // Error

Function Hoisting:
--------------------------------------------------------
greet();

function greet() {
    console.log("Hello!");
}
*/


/*
========================================================
Topic 20: REST API Calls and Accessing JSON
========================================================

RESTful APIs allow communication between applications.
We use HTTP methods (GET, POST, PUT, DELETE) to interact with servers.
JSON is the standard format for data exchange.
*/

/*
========================================================
Fetch API - Making HTTP Requests
========================================================
*/

/*
GET Request - Retrieve data from server
*/

// Basic fetch request
fetch('https://api.example.com/users')
  .then(response => response.json())  // Parse JSON
  .then(data => console.log(data))     // Use the data
  .catch(error => console.error('Error:', error));

// Fetch with error handling
fetch('https://api.example.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

// Fetch with headers
fetch('https://api.example.com/users', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN123'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

/*
POST Request - Send data to server
*/

// Basic POST request
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John',
    email: 'john@example.com',
    age: 30
  })
})
  .then(response => response.json())
  .then(data => console.log('User created:', data))
  .catch(error => console.error('Error:', error));

/*
PUT Request - Update existing data
*/

fetch('https://api.example.com/users/5', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Jane',
    email: 'jane@example.com',
    age: 28
  })
})
  .then(response => response.json())
  .then(data => console.log('User updated:', data))
  .catch(error => console.error('Error:', error));

/*
DELETE Request - Remove data from server
*/

fetch('https://api.example.com/users/5', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log('User deleted:', data))
  .catch(error => console.error('Error:', error));

/*
========================================================
Async/Await - Modern Approach
========================================================
*/

// Async function with await
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('User data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchUserData();

// Async function with POST
async function createUser(user) {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    
    const data = await response.json();
    console.log('User created:', data);
    return data;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser({ name: 'Alice', email: 'alice@example.com', age: 25 });

// Multiple async requests
async function fetchMultipleAPIs() {
  try {
    const [usersRes, postsRes, commentsRes] = await Promise.all([
      fetch('https://api.example.com/users'),
      fetch('https://api.example.com/posts'),
      fetch('https://api.example.com/comments')
    ]);
    
    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();
    
    console.log('Users:', users);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMultipleAPIs();

/*
========================================================
Accessing and Working with JSON
========================================================
*/

// JSON Object - contains methods for parsing and stringifying

// Sample JSON data
let jsonString = '{"name": "Bob", "age": 30, "city": "Boston"}';

// Parse JSON string to object
let user = JSON.parse(jsonString);
console.log(user.name); // Bob
console.log(user.age);  // 30

// Stringify object to JSON
let userObj = { name: 'Charlie', age: 35, email: 'charlie@example.com' };
let jsonData = JSON.stringify(userObj);
console.log(jsonData); // {"name":"Charlie","age":35,"email":"charlie@example.com"}

// Stringify with formatting (indentation)
let prettyJson = JSON.stringify(userObj, null, 2);
console.log(prettyJson);
/*
Output:
{
  "name": "Charlie",
  "age": 35,
  "email": "charlie@example.com"
}
*/

// Parse JSON array
let jsonArray = '[{"id": 1, "name": "David"}, {"id": 2, "name": "Eve"}]';
let users = JSON.parse(jsonArray);
console.log(users[0].name); // David
console.log(users[1].id);   // 2

// Accessing nested JSON
let company = {
  name: "TechCorp",
  location: {
    city: "San Francisco",
    country: "USA"
  },
  employees: [
    { name: "Frank", role: "Developer" },
    { name: "Grace", role: "Designer" }
  ]
};


console.log(company.location.city);      // San Francisco
console.log(company.employees[0].name);  // Frank
console.log(company.employees[1].role);  // Designer

// Iterating through JSON objects
let product = { id: 101, name: "Laptop", price: 999.99, inStock: true };

for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

// Using Object methods with JSON
let apiResponse = { status: 200, message: "Success", data: [1, 2, 3] };
console.log(Object.keys(apiResponse));      // ["status", "message", "data"]
console.log(Object.values(apiResponse));    // [200, "Success", [1, 2, 3]]
console.log(Object.entries(apiResponse));   // [["status", 200], ["message", "Success"], ["data", [1, 2, 3]]]

/*
========================================================
Error Handling and Response Status
========================================================
*/

async function checkApiStatus() {
  try {
    const response = await fetch('https://api.example.com/status');
    
    // Check response status codes
    if (response.status === 200) {
      console.log('Success');
      const data = await response.json();
      return data;
    } else if (response.status === 404) {
      console.log('Not found');
      throw new Error('Resource not found');
    } else if (response.status === 500) {
      console.log('Server error');
      throw new Error('Server error');
    } else if (response.status === 401) {
      console.log('Unauthorized');
      throw new Error('Authentication required');
    } else {
      throw new Error(`Unexpected status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkApiStatus();

/*
========================================================
Common API Patterns
========================================================
*/

// Fetching data with query parameters
const searchUsers = async (query) => {
  try {
    const url = new URL('https://api.example.com/users');
    url.searchParams.append('search', query);
    url.searchParams.append('limit', 10);
    
    const response = await fetch(url);
    const data = await response.json();
    console.log('Search results:', data);
    return data;
  } catch (error) {
    console.error('Search error:', error);
  }
};

searchUsers('alice');

// Rate limiting and retry logic
const fetchWithRetry = async (url, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      console.log(`Attempt ${i + 1} failed:`, error.message);
      if (i < maxRetries - 1) {
        // Wait before retrying (exponential backoff)
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
      }
    }
  }
  throw new Error('Max retries exceeded');
};

fetchWithRetry('https://api.example.com/data');

// Pagination
const fetchAllPages = async (baseUrl) => {
  let allData = [];
  let page = 1;
  let hasMore = true;
  
  while (hasMore) {
    try {
      const response = await fetch(`${baseUrl}?page=${page}`);
      const data = await response.json();
      
      if (data.items && data.items.length > 0) {
        allData = allData.concat(data.items);
        page++;
      } else {
        hasMore = false;
      }
    } catch (error) {
      console.error('Pagination error:', error);
      hasMore = false;
    }
  }
  
  return allData;
};

fetchAllPages('https://api.example.com/items');


/*----------------------------------------------------------
Topic 21: JSON Key Translation
------------------------------------------------------------
- Transforming JSON object keys (e.g., snake_case to camelCase)
- Renaming keys for consistency
- Mapping keys from API to application format
- Using recursion for nested objects and arrays
- Accessing translated data using bracket notation: data.inventory[1].item
*/

/* Example 1: Basic Store Inventory with Array Access */
const storeData = {
  store_name: "Tech Shop",
  inventory: [
    {
      item_id: 101,
      item_name: "Laptop",
      item_price: 999.99,
      stock_quantity: 15
    },
    {
      item_id: 102,
      item_name: "Mouse",
      item_price: 25.99,
      stock_quantity: 50
    },
    {
      item_id: 103,
      item_name: "Keyboard",
      item_price: 79.99,
      stock_quantity: 30
    }
  ]
};

// Before translation - accessing with snake_case
console.log(storeData.inventory[1].item_name); // "Mouse"
console.log(storeData.inventory[0].item_price); // 999.99


/* Example 2: Snake Case to Camel Case Conversion */
function snakeToCamel(str) {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

function translateKeys(obj) {
  if (Array.isArray(obj)) {
    return obj.map(item => translateKeys(item));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = snakeToCamel(key);
      acc[camelKey] = translateKeys(obj[key]);
      return acc;
    }, {});
  }
  return obj;
}

// Translate the store data
const translatedStore = translateKeys(storeData);

// After translation - accessing with camelCase
console.log(translatedStore.storeName); // "Tech Shop"
console.log(translatedStore.inventory[1].itemName); // "Mouse"
console.log(translatedStore.inventory[0].itemPrice); // 999.99
console.log(translatedStore.inventory[2].stockQuantity); // 30

/* Example 3: Restaurant Menu with Nested Categories */
const restaurantData = {
  restaurant_name: "Bistro Cafe",
  menu_categories: [
    {
      category_name: "Appetizers",
      menu_items: [
        { dish_name: "Spring Rolls", dish_price: 8.99, is_vegetarian: true },
        { dish_name: "Chicken Wings", dish_price: 12.99, is_vegetarian: false }
      ]
    },
    {
      category_name: "Main Course",
      menu_items: [
        { dish_name: "Grilled Salmon", dish_price: 24.99, is_vegetarian: false },
        { dish_name: "Pasta Primavera", dish_price: 18.99, is_vegetarian: true }
      ]
    }
  ]
};

// Before translation
console.log(restaurantData.menu_categories[0].menu_items[1].dish_name); // "Chicken Wings"

// Translate keys
const translatedMenu = translateKeys(restaurantData);

// After translation - clean camelCase access
console.log(translatedMenu.restaurantName); // "Bistro Cafe"
console.log(translatedMenu.menuCategories[0].categoryName); // "Appetizers"
console.log(translatedMenu.menuCategories[0].menuItems[1].dishName); // "Chicken Wings"
console.log(translatedMenu.menuCategories[1].menuItems[0].dishPrice); // 24.99


/* Example 4: Company Data with Departments and Employees */
const companyData = {
  company_name: "Tech Corp",
  total_employees: 150,
  departments: [
    {
      dept_name: "Engineering",
      dept_head: "Sarah Johnson",
      employees: [
        { emp_id: 1001, emp_name: "Alice Smith", job_title: "Senior Developer" },
        { emp_id: 1002, emp_name: "Bob Chen", job_title: "DevOps Engineer" }
      ]
    },
    {
      dept_name: "Marketing",
      dept_head: "Mike Davis",
      employees: [
        { emp_id: 2001, emp_name: "Carol White", job_title: "Marketing Manager" },
        { emp_id: 2002, emp_name: "David Brown", job_title: "Content Writer" }
      ]
    }
  ]
};

// Translate company data
const translatedCompany = translateKeys(companyData);

// Accessing nested employee data
console.log(translatedCompany.departments[0].employees[1].empName); // "Bob Chen"
console.log(translatedCompany.departments[1].deptName); // "Marketing"
console.log(translatedCompany.departments[0].employees[0].jobTitle); // "Senior Developer"

// Loop through and display all employees
translatedCompany.departments.forEach((dept, deptIndex) => {
  dept.employees.forEach((emp, empIndex) => {
    console.log(`${dept.deptName} - ${emp.empName}: ${emp.jobTitle}`);
    // Can also access as: translatedCompany.departments[deptIndex].employees[empIndex].empName
  });
});


/* Example 5: E-commerce Order System */
const orderData = {
  order_id: 54321,
  customer_name: "Jane Doe",
  order_date: "2026-01-24",
  order_items: [
    {
      product_id: 201,
      product_name: "Wireless Headphones",
      unit_price: 89.99,
      quantity: 2,
      item_total: 179.98
    },
    {
      product_id: 202,
      product_name: "USB-C Cable",
      unit_price: 15.99,
      quantity: 3,
      item_total: 47.97
    },
    {
      product_id: 203,
      product_name: "Phone Case",
      unit_price: 24.99,
      quantity: 1,
      item_total: 24.99
    }
  ],
  shipping_address: {
    street_address: "123 Main St",
    city_name: "Springfield",
    zip_code: "12345"
  }
};

// Translate order data
const translatedOrder = translateKeys(orderData);

// Accessing order items with array indexing
console.log(translatedOrder.orderItems[0].productName); // "Wireless Headphones"
console.log(translatedOrder.orderItems[1].unitPrice); // 15.99
console.log(translatedOrder.orderItems[2].itemTotal); // 24.99

// Accessing nested shipping address
console.log(translatedOrder.shippingAddress.streetAddress); // "123 Main St"

// Calculate total using array access
let orderTotal = 0;
for (let i = 0; i < translatedOrder.orderItems.length; i++) {
  orderTotal += translatedOrder.orderItems[i].itemTotal;
}
console.log(`Total: $${orderTotal}`); // Total: $252.94


/* Example 6: API Response with Pagination and Results Array */
async function fetchAndTranslateInventory(url) {
  try {
    const response = await fetch(url);
    const apiData = await response.json();
    
    // API returns data like: { page_number: 1, total_pages: 5, inventory_items: [...] }
    const translatedData = translateKeys(apiData);
    
    // Now we can access with clean syntax
    console.log(`Page ${translatedData.pageNumber} of ${translatedData.totalPages}`);
    
    // Access items in the inventory array
    console.log(translatedData.inventoryItems[0].itemName);
    console.log(translatedData.inventoryItems[3].stockQuantity);
    
    return translatedData;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

// Usage: fetchAndTranslateInventory('https://api.example.com/inventory')


/* Example 7: Dynamic Key Access After Translation */
const productCatalog = {
  catalog_id: 789,
  product_list: [
    { sku_code: "LAP-001", product_type: "Electronics", in_stock: true },
    { sku_code: "SHO-042", product_type: "Footwear", in_stock: false },
    { sku_code: "BOK-123", product_type: "Books", in_stock: true }
  ]
};

const translatedCatalog = translateKeys(productCatalog);

// Using variables to access array elements
const itemIndex = 1;
const selectedItem = translatedCatalog.productList[itemIndex];
console.log(selectedItem.skuCode); // "SHO-042"
console.log(selectedItem.productType); // "Footwear"

// Conditional access based on index
if (translatedCatalog.productList[2].inStock) {
  console.log(`${translatedCatalog.productList[2].skuCode} is available`);
}


