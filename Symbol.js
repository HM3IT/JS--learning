let array=[1,2,3];
let car={
  type:"BMW",
  speed:"80KPH",
  Model:2020
}
// let toStringSymbol=Symbol("toString");
// Array.prototype[toStringSymbol]=function(){
//   return `${this.length} cm of blue`;
// }
// let toStringObject=Symbol("toString");
// Object.prototype[toStringObject]=function(){
//   return `${this.type} car`;
// }

let res1=array.toString();
let res2=array[toStringSymbol]();
let res3=car[toStringObject]();

console.log(res1);
console.log(res2);
console.log(res3);