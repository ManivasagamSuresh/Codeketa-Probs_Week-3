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

 
  var a = parseInt(userInput[0]);
 var b = (userInput[1]);
 var c = b.split(' ').map(val=>Number(val))
//  console.log(c);
 var d= "";
 for(let i=0;i<c.length;i++)
 {
 for(let j=i+1;j<c.length;j++)
 {if(c[i]==c[j])
  d=d+c[i]+" "
 
 }
 }
 e=d.split(" ").map(num=>Number(num))
 f=e.pop();
 if(d=="")
 {
     console.log(-1);
 }else{console.log(...e);}


  //end-here
});