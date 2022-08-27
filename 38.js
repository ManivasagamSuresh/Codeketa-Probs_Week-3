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
 var b = userInput[1].split(" ").map(val=>Number(val));
 var c = Number(userInput[2]);
 let d ="";
 let f ="";

function FirstNegativeInteger(b, a, c)
{
  
    let flag;
     
    
    for (let i = 0; i<(a-c+1); i++)        
    {
        flag = false;
 
       
        for (let j = 0; j<c; j++)
        {
            
            if (b[i+j] < 0)
            {
            
                d=d+(b[i+j])+" ";
                flag = true;
                break;
            }
            
        }
         
       
        if (!flag)
            f=f+0+" ";
    }
}
 
   
     
  
  FirstNegativeInteger(b, a, c);
  
  if(f=="")
  {
      let r = d.split(" ").map((num)=>Number(num));
r.pop();
console.log(...r);
      
  }
  else
  {let z = f.split(" ").map((num)=>Number(num));
z.pop();
console.log(...z);}


  //end-here
});