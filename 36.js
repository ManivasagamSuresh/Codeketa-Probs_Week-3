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

let a = userInput[0].split(' ');
  let b = userInput[1].split(' ');
  
 if (b[0]<a[0] && a[0]<b[1])
 {console.log("yes");}
 else {console.log("no");}

  //end-here
});