let username = "faiyaz"
let firstname = "faiyaz"

console.log(username == firstname);

console.log(username === firstname);

let number = 3
let number2 = "3"

console.log(number == number2);
console.log(number === number2);

//Escape Sequence
let test = "It\'s is regrssion testing";
let testype ="It is \"regression testing\" type"
console.log(test);
console.log(testype);
//concatenation 
//Template literal
//String Methods
//.length
let CourseName = "Playwright Automation";
console.log("String Length " + CourseName.length);

//CharAt()
console.log(`ChartAt() -The first character in the courseName  for ${CourseName} is ${CourseName.charAt(0)}`);

//IndexOf
console.log(`indexOf() -The index of t is ${CourseName.indexOf('t')}`);

//includes
console.log(`Includes()- : ${CourseName.includes('Play')}`);
//slice- startindex to end index -1 

//Split()

let courseSplit = CourseName.split(" ");
console.log("CourseSplit " + courseSplit);

let courseSplit2 = CourseName.split("");
console.log("CourseSplit by characters " + courseSplit2);

//SubString()

let coursesSubstring = CourseName.substring(2,10);

//reverse