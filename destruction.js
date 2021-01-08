let person={
    name:'mg mg',
    age:17,
    job:"software engineer",
    doIt:()=>console.log('hello'),
    1:"the rest of one",
    2:"the rest of two",
    3:"the rest of three",
}
let {name,age,job,doIt,...rest}=person;
doIt();
console.log(name);
console.log(age);
console.log(job);

console.log(Object.values(rest));