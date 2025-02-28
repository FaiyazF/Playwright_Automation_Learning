//Task 1: Function Declaration
//Create a function named `userProfile` that takes a `name` as a parameter and 
// logs “Hello, <name>!" to the console.console.log("This is Normal Functon");
let userProfile = function(name)
{
console.log(`Hi My name is ${name} and This is Normal Function declaration\n`); //template literal with backtic symblol
}
userProfile("faiyaz")


//Arrow function
//Task 2: Arrow Function
//Create an arrow function named `double` that takes a number as a parameter and
//  returns double its value.
console.log("This is Arrow Functon");
const doubleNumber = (number) => number*2.0
console.log("Double value "+ doubleNumber(2.4)+"\n");


//Task 3: Anonymous Function
//Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
//  after 2 seconds.
setTimeout(()=>{
console.log("This message is delayed by 2 seconds\n")
},2000)


//Task 4: Callback Function
//Create a function named `getUserData` that takes a callback function as a parameter.
//  Inside `getUserData`, simulate fetching data with `setTimeout` and then call the callback function with a user object after 3 seconds.
//Call the `getUserData` function and log the user's name and age using the callback function
function getUserData(callBack)
{
  console.log("Checking the user data");
  setTimeout(()=>
  {
    const user = {name : "Faiyaz", age : 100}
    console.log("user data is found");
    callBack(user);
  },3000);
}

let user= (user)=>{
  console.log(`User Name: ${user.name}, Age: ${user.age}`);
}

getUserData(user);