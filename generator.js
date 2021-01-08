 let something=(function(){
  let nextVal;
  return {
    [Symbol.iterator]:function (){return this},
    next:function(){
      if(nextVal==undefined){
        nextVal=1;
      }else{
        nextVal=(nextVal*3)+6;
      }
      return {done:false,value:nextVal}
    }
  }
})();
let it=something;
// let res=it.next().value;
// let res1=it.next().value;

let show=function(data){console.log(data)}

for(v of something){
  if(v >500)break;
  show(v);
  
}