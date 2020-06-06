//Ex 7.1

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b){
  if(Math.random() < 0.2){
    return a * b;
  }else{
    throw new MultiplicatorUnitFailure("UnitFailure");
  }
}


function repeatMultiplicationUntilSuccess(a, b){
  for(;;){
    let result;
    try{
      console.log(`Try block entered`);
      result = primitiveMultiply(a, b);
      console.log(`${a} x ${b} = ${result}`);
    }catch(e){
      if(e instanceof MultiplicatorUnitFailure){
        console.log(`Exception caught: ${e.message}`);
      }
    }
    if(result != undefined){
      console.log(`Result is ${result}`);
      break;
    }
  }
}


//Ex 7.2
const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if(this.locked) throw new Error("Locked!");
        return this._content;
    }
}


function withBoxUnlocked(body){
    if(box.locked){
      console.log(`Unlocking box...`);
      box.unlock();
    }
    try{
      body();
    }catch(e){
      console.log(`Exception occured: ${e.message}`);
    }finally{
      if(!box.locked){
        console.log(`Locking box...`);
        box.lock();
      }
    }
};



try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
