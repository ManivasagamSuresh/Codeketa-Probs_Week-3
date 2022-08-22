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
// console.log(a[0]);
let b =[];
for (let i = +a[0] ;i<= +a[1] ; i++)
{
 b.push(i);
}
// console.log(b) ;

let c = b.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(c.length);

  //end-here
});