//Ex 5.1 - Flattening
let inputArray = [[2,12,94], [8,1,-4,49,24,13], [38,91, 21, 18, -49, -20, 31]];
let initialResult=[]

let finalResult = inputArray.reduce((totalResult, item)=>{
  return totalResult.concat(item);
}, initialResult);

console.log(`Flattened Array: ${finalResult}`);

//Ex 5.2 - Your Own Loop.
function loop(value, testFunction, bodyFunction, updateFunction){
    if(!testFunction(value)){
        return false;
    }
    let returnValue = bodyFunction(value);
    updateFunction(value);
    loop(returnValue, testFunction, bodyFunction, updateFunction);
}

//Ex 5.3 -  
