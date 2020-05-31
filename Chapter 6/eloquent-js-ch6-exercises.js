"use strict"s
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
