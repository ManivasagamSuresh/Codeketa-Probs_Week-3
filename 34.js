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

  for (let i = 0; i<userInput.length;i++)
  {
  let a = userInput[i].split(' ');
  console.log(a[1]-a[0]);
  }

  //end-here
});