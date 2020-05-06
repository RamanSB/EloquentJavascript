//Ex 2.1

function writeNTimes(n){
  let message = '#';
  let pElem = document.getElementById('exercise-1-p-tag');
  for(let i=0; i<n; i++){
    console.log(message);
    let breakElement = document.createElement('br');
    let node = document.createTextNode(message);
    pElem.appendChild(node);
    pElem.appendChild(breakElement);
    message+='#';
  }
}

writeNTimes(7);

//Ex 2.2

function printNaturalNumbers(n){
  for(let i=1; i<=n; i++){
    if(!filterMultiplesOf3And5(i)){
      console.log(i);
    }
  }
}

function filterMultiplesOf3And5(n){
  let returnVal = false;
  if(n%5==0 && n%3==0){
      console.log('FizzBuzz');
      returnVal = true;
  } else if(n%5==0){
      console.log('Buzz');
      returnVal = true;
  }else if(n%3==0){
      console.log('Fizz');
      returnVal = true;
    }
  return returnVal;
}

//printNaturalNumbers(100);


//Ex 3.3
function createChessboard(chessboardSize){
  let chessboard = "";
  for(let i=0; i<chessboardSize; i++){
    //Alternates starting pattern for each line to create chequered grid.
    let startingChar = '#';
    let alternatingChar = ' ';
    if(i%2==0){ //i=0,2,4,6, (will start with ' ')
      startingChar = ' ';
      alternatingChar = '#';
    }
    for(let j=0; j<chessboardSize; j++){
      if(j%2==0){
        chessboard+=startingChar;
      }else{
        chessboard+=alternatingChar;
      }
    }
    chessboard+="\n";
  }
  console.log(chessboard);
  return chessboard;
}

let chessboardString = createChessboard(10).replace(/\n*\n/g, document.createElement('br'));
console.log(chessboardString)
let pElem = document.getElementById('exercise-3-p-tag');
let textNode = document.createTextNode(chessboardSize);
pElem.appendChild(textNode);
