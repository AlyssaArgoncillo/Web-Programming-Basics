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
- Topic 14: JavaScript events and Event Handling
- Topic 15: The return Statement in JavaScript
- Topic 16: Function Invocation (Calling Functions)
- Topic 17: Global and Local Scope
-------------------------------------------------------------   
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
let name = "Alice";
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

--------------------------------
Basic Math Operators Example
--------------------------------
*/

let num1 = 10;
let num2 = 5;

console.log(num1 + num2);   // Addition: 15
console.log(num1 - num2);   // Subtraction: 5
console.log(num1 * num2);   // Multiplication: 50
console.log(num1 / num2);   // Division: 2
console.log(num1 % num2);   // Modulus (remainder): 0
console.log(num1 ** num2);  // Exponentiation (power): 100000

/*
--------------------------------
Math Object Functions
--------------------------------
*/

console.log(Math.floor(4.7));   // 4  -> rounds down
console.log(Math.ceil(4.3));    // 5  -> rounds up
console.log(Math.round(4.5));   // 5  -> rounds to nearest integer
console.log(Math.trunc(4.9));   // 4  -> removes decimal part

console.log(Math.max(10, 5, 20)); // 20 -> largest value
console.log(Math.min(10, 5, 20)); // 5  -> smallest value

console.log(Math.pow(2, 3));     // 8  -> 2 raised to power 3
console.log(Math.sqrt(25));      // 5  -> square root

console.log(Math.abs(-15));      // 15 -> absolute value

/*
--------------------------------
Random Number Example
--------------------------------
*/

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Random number from 1 to 10

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

/*
========================================================
Topic 14: JavaScript Events and Event Listeners
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
Topic 15: The return Statement in JavaScript
========================================================

The RETURN statement sends a value back from a function
and stops the function execution.

Syntax:
function name() {
    return value;
}
*/

//Example:
//--------------------------------------------------------
function add(a, b) {
    return a + b;
}

let result1 = add(5, 3);
console.log(result1); // 8

//Without return:
//--------------------------------------------------------
function multiply(a, b) {
    a * b;
}

console.log(multiply(2, 3)); // undefined

//Correct version:
//--------------------------------------------------------
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6


/*
========================================================
Topic 16: Function Invocation (Calling Functions)
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
Topic 17: Global and Local Scope
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
