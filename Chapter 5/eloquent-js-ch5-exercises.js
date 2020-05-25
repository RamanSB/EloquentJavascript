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

//Ex 5.3 - Everything (Arrays - every method)
//with loop
function every(array, test){
    for(let elem of array){
        if(!test(elem)){
            return false;
        }
    }
    return true;
}

//without Loop
function every(array, test){
  let mappedArray = array.map(x => test(x));
  return !mappedArray.includes(false);
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));

//Ex 5.4 - Dominant direction
function mapCharCodesToDirection(array){

    function findDirection(code){
        for(let script of SCRIPTS){
            for(let range of script.ranges){
                if(code >= range[0] && code < range[1]){
                    return script.direction;
                }
            }
        }
        return `No script matches code: ${code}`;
    }

    let mappedArray = array.map(findDirection).filter(x => {return x==='ltr' || x=='rtl'});
    return mappedArray;
}

function displayResults(initialString, preResults){
  let numResults = preResults.length;
  let ltrCount = preResults.filter(x=>x==='ltr').length;
  let rtlCount = numResults - ltrCount;
  console.log(`${initialString} | rtl:${100 * rtlCount/numResults}% ltr: ${100 * ltrCount/numResults}%`);
}

function convertStringToAscii(string){
    let charValArr = [];
    for(let idx in string){
        charValArr.push(string.charCodeAt(idx));
    }
    return charValArr;
}

let testString = "Hey, مساء الخير";
let charAsciiCodes = convertStringToAscii(testString);
let preResultsArray = mapCharCodesToDirection(charAsciiCodes);
displayResults(testString, preResultsArray);
