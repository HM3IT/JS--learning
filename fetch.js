let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye');
})
let promise2=Promise.resolve("Helloworld");
let promise3=17;
let promise4=fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=>res.json());

Promise.all([promise1,promise2,promise3,promise4]).then((res)=>{
    console.log(res)
}).catch((err)=>{console.log(err)});

