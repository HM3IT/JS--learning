//    can't duplicate key insert
let array=new Map();
array.set(1,"apple");
array.set(2,"banana");
array.set(3,"coconut");
array.set(4,"orange");
array.set(5,"purple");

let res=array.get(2);
let data=array.values();
console.log(res);
array.forEach((v,k)=>{
    console.log(`key is ${k} and value is ${v} `)
})
console.log( data);