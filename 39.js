// Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.





// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

   let a =userInput[0].split(" ").map(num=>Number(num));
// console.log(a);
if(a[0]*a[1]===Math.pow(a[0],2))
console.log("yes");
else{
    console.log("no")
}

  //end-here
});