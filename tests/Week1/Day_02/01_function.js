// Fucntion expression

let user = function(name)
{
console.log(`Hi My name is ${name}`); //template literal with backtic symblol
}

user("faiyaz")

//Arrow function

const welcome = () => "Hello Learners";
console.log(welcome());

//IIFE-Immediate Invoke
(function(name)
{
  console.log(`Hi my name in IIFE is ${name}`)
}
)
("FAIYAZ IIFE");

