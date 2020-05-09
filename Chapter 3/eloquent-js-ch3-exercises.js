//Ex 3.1
function min(v1, v2){
  if((typeof v1 == "number") &&  (typeof v2 == "number")){
    console.log("Input parameters are both numbers.");
  }else{
    console.log("Program Terminated...\nInput parameters must be a numbers, e.g. 2.1, -2, 3.2, 591, 21152e9");
    return null;
  }
  let minimum = 0;
  console.log(`Finding the minimum of ${v1} & ${v2}`);
  v1<=v2 ? minimum=v1 : minimum=v2;
  console.log(minimum);
  return minimum;
}


function calculateMinimum(){
  var v1 = Number(document.getElementById('1st-val').value);
  var v2 = Number(document.getElementById('2nd-val').value);
  let result = min(v1, v2);
  let pElem = document.getElementById('result-string-3.1');
  pElem.innerHTML = '';  //erases result written from previous calculation
  let resultString = `The minimum of ${v1} & ${v2} is: ${result}`;
  let textNode = document.createTextNode(resultString);
  pElem.appendChild(textNode);
};


//Ex 3.2
/*
Zero is even
One is odd
For any other number N, its evenness is the same as N-2
*/

function isEven(N){
  let inputNumber = Number(N);
  if(!(inputNumber == parseInt(inputNumber))){
    console.log("Input must be a positive integer (a whole number).");
    return null;
  }
  if(N==0){
    console.log("N=0");
    return true;
  }else if(N==1){
    console.log("N=1");
    return false;
  }
  console.log(`N=${N}`);
  return isEven(N-2);
}

function calculateIsEven(){
  let result = isEven(document.getElementById('input-val').value);
  let pElem = document.getElementById('result-string-3.2');
  pElem.innerHTML = ''; //erases result written from previous calculation
  let textNode = document.createTextNode(result);
  pElem.appendChild(textNode);
}

/*
The issue with the input parameter N=-1 is that on line 49 - we will subtract 2
resulting in -3, the base cases of N being equal to 0 or 1 will never be met.

The loop will continue adding more recursive calls to the stack soon resulting in
a stackoverflow error.

In order to fix this: Any negative integer that is inputted can be multipledi by
-1. This is true as if x is even or odd so is -x.
*/


//Ex 3.3
function countBs(string){
  let numB = 0;
  for(let char in string){
    if(string[char] == 'B'){
      numB+=1;
    }
  }
  let pElem = document.getElementById('result-string-3.3');
  let textNode = document.createTextNode(`Number of B's: ${numB}`);
  pElem.innerHTML = ''; //erases previously written results.
  pElem.appendChild(textNode);
  return numB;
}


document.getElementById('input-text').addEventListener("input", function(){
  let val = countBs(document.getElementById('input-text').value);
  console.log(val);
});

/*
Simply pass the argument from countBs to countChar and hardcode the char argument
to be 'B'.
*/
function countChar(string, char){
  let total = 0;
  for(let index in string){
    if(string[index] == char){
      total+=1;
    }
  }
  console.log(`${char} appears ${total} times in ${string}`);
  return total;
}
