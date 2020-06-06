"use strict"
//Ex 6.1
coords = {x: [2,4], y:[3, 10], nDataPoints: 2};

console.log(coords);

function calculateModulus(){
  let modulus = [];
  for(let i=0; i<this.nDataPoints; i++){
    modulus.unshift(this.x[i]**2 + this.y[i]**2);
  }
  return modulus;
}

calculateModulus.call(coords);


class Vec{

  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  plus(v){
    return new Vec(this.x+v.x, this.y+v.y);
  }

  minus(v){
    return new Vec(this.x-v.x, this.y-v.y);
  }

  get length(){
    return Math.sqrt(this.x**2 + this.y**2);
  }
}



//Ex 6.2 - Group
class Group{


  constructor(){
    this.group = [];
  }

  //item ---> void (side effect)
  add(item){
    if(!this.group.includes(item)){
      this.group.unshift(item);
    }
  }

  //item ---> boolean
  delete(item){
    if(this.group.includes(item)){
      let itemIdx = this.group.indexOf(item);
      if(itemIdx != this.group.length-1){
        let temp = this.group[arr.length];
        this.group[itemIdx] = temp;
      }
      this.group.pop();
      return true;
    }else{
      return false;
    }
  }
  //item ---> boolean
  has(item){
    return this.group.includes(item);
  }

  static from(iterable){
    let newGroup = new Group();
    for(let item of iterable){
      newGroup.add(item);
    }
    return newGroup;
  }

  [Symbol.iterator](){
    return new GroupIterator(this);
  }

}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));


//Ex 6.3 - Iterable groups
class GroupIterator{

    constructor(group){
        this.group = group;
        this.idx = 0;
    }

    next(){
        if(this.idx >= this.group.group.length){
          return {done: true};
        }
        else{
          let newValue = {value: this.group.group[this.idx], done: false};
          this.idx++;
          return newValue;
        }
    }
}

//Ex 6.4 - Every function has a call method we can invoke where we provide
//the parameter which we invoke the function on (this) as well as additional
//args we want to pass to the function.
let map = {one: true, two: true, hasOwnProperty: true};
console.log(hasOwnProperty.call(map, "one"));
