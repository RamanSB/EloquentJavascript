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
  let pElem = document.getElementById('result-string');
  let resultString = `The minimum of ${v1} & ${v2} is: ${result}`;
  let textNode = document.createTextNode(resultString);
  pElem.appendChild(textNode);

};
