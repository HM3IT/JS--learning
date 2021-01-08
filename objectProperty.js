function circle(radius,prarmeter){
    this.radius=radius;
    this.parameter=prarmeter;
    function draw(){
        console.log(" i am drawing")
    }
}
let circled=new circle(5,10);
for(key in circled)console.log(key);

let keys=Object.keys(circled); 
console.log(keys)

if('radius' in circled)console.log("Here i'm ");


this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};
module.getX();//  returns 81
const retrieveX = module.getX;
retrieveX();
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX(); //  returns 8