//Ex 4.1 - The sum of a range.
function range(start, end){
  let array = [];
  for(let i=start; i<=end; i++){
    if(i<0){
      array[-1*start + i] = i;
    }else{
      array[i-start] = i;
    }
  }
  console.log(`returning array: ${array}`);
  return array;
}


function sum(array){
  let total = 0;
  for(let val in array){
    total+=Number(val);
  }
  console.log(`The sum total of the elements in the array, ${array} is equal to ${total}`);
  return total;
}


/*4.1 - Bonus
The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/
function range(start, end, step=1){
  let array = undefined;
  if((start>end && step>0) || (start<end && step<0)){
    console.error(`Step (${step}) must be in the direction moving from ${start} to ${end}`);
  }
    let arrayLength = Math.floor((end-start)/step);
    array = new Array(arrayLength);
    for(let i=0; i<=arrayLength; i++){
      array[i] = start+((i)*step);
    }
  console.log(array);
}

range(1, 10, 2);
range(5, 2, -1);


//Ex 4.2 - Reversing an array
function reverseArray(array){
  console.log(`Reversing array: ${array}`);
  let reversedArray = new Array(array.length);
  for(let i=1; i<=array.length; i++){
    reversedArray[array.length-i] = array[i-1];
  }
  console.log(reversedArray);
  return reversedArray;
}

//reverseArray([1,3,5,9,12,-12,31,31,-1,21,5]);

/*array.unshift(x) adds x to the 1st element of the array.
 array.shift() removes & returns the 1st element from the array.
 array.pop() - removes & returns the last element from the array.
 array.push(...items) - adds the items to the end of the array (order preserved).
 [1,9,21,7] ---> [7,21,9,1]
 [1,4,3,10,-2] ---> [-2, 10, 3, 4, 1]
 1st iteration: [1, 4, 3, 10, -2] ---> [-2, 4, 3, 10, 1]
 2nd iteration: [-2, 4, 3, 10, 1] ---> [-2, 10, 3, 4, 1]
*/
function reverseArrayInPlace(array){
  console.log(`Reversing array: ${array}`);
  let arrayLength = array.length;
  for(let idx in array){
    if(idx == Math.floor(arrayLength/2)){
      console.log(`No longer need to iterate beyond index: ${Math.floor(arrayLength/2)}`);
      break;
    }
    let temp = array[idx];
    array[idx] = array[arrayLength-1-idx];
    array[arrayLength-1-idx] = temp;
  }
  console.log(array);
  return array;
}

array = [1,4,3,10,-2];
console.log(`Array prior to reversal: ${array}`);
reverseArrayInPlace(array);
console.log(`Array after reversing in place: ${array}`);


/*
Functions with side effects do not return any values.
Pure functions will always return the same value given a partcular input and
will not change.
*/

//Ex 4.3 - A List
/*
Given [1,2,3]
returns: {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
      }
    }
  };

  Adopting a recursive approach to nest json.
*/


function arrayToList(array){
    let list = nestElement(array.length, array);
    console.log(`Array [${array}] to list: ${list}`);
    return list;
}

let list = arrayToList([1,4,9,4]);

function nestElement(n, array){
  console.log(`nestElement called with n=${n}`);
  if(n==1){
    console.log(`Entered base case.`);
    let message = `{\n"value": ${array[array.length-n]}, \n"rest" : "null" }`;
    return message;
  }
  return createElement(n, array);
}

function createElement(n, array){
    console.log(`createElement called with n=${n}`);
    let element = `{\n"value": ${array[array.length-n]}, \n"rest" : ${nestElement(n-1, array)} }`;
    console.log(`${element}`);
    return element;
}

function listToArray(list){
  let array = []
  let jsonObject = JSON.parse(list);
  for(let node=jsonObject; node; node=node.rest){
    if(node == `null`){
      break;
    }
    array.push(node.value);
  }
  return array;
}

let arrayFromList = listToArray(list);

function prepend(element, list){
  let innerListJson = JSON.parse(list);
  let prependedElementJson = JSON.parse(`{\n"value": ${element}}`);
  prependedElementJson.rest = list;
  console.log(`prependedListJson: ${prependedElementJson}`);
  return prependedElementJson;
}

function nth(list, n){
  let listJson = JSON.parse(list);
  let counter = 0;
  let node=listJson;
  for(node=listJson; node; node=node.rest){
    counter+=1;
    if(counter==n){
      console.log(counter);
      return node.value;
    }else if(counter > n){
      return undefined;
    }
  }
}
prepend(10, list);
nth(list, 3);


//Ex - 4.4 (Deep Comparison)
function deepEqual(val1, val2){
  let keysForObject1 = Object.keys(val1);
  let keysForObject2 = Object.keys(val2);
  if(!checkIfKeysAreEqual(keysForObject1, keysForObject2)){
    return false;
  }
  for(let key of keysForObject1){
    if(typeof val1[key] == typeof val2[key]){
      console.log(`Key: ${key} corresponds to values of equal type (${typeof val1[key]}) in both objects.`);
      if(typeof val1[key] != "object" && val1[key] != null){
        if(!(val1[key] === val2[key])){
          console.log(`For key: ${key} | ${val1[key]} is not equal to ${val2[key]}`);
          return false;
        };
      }else{
        deepEqual(val1[key], val2[key]);
      }
    }else{
      console.log(`Key: ${key} does not correspond to values of equal type.
      +"\nValue1: ${typeof val1[key]} | Value2: ${typeof val2[key]}"`);
      return false;
    }
  }
  return true;
}

function checkIfKeysAreEqual(array1, array2){
  let counter = 0;
  if(array1.length == array2.length){
    for(let key of array1){
      if(array2.includes(key)){
        counter+=1;
      }
    }
  }
  if(counter == array1.length){
    return true;
  }else{
    return false;
  }
}
