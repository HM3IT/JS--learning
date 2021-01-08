let posts=[
    { title:"Post 1",
        body:"this is post 1 body"},
    { title:"Post 2",
        body:"this is post 2 body"}
    ]
function getPosts(){
setTimeout(()=>{
let output='';
posts.forEach((post,index)=>{
output+=`<li>${post.title}</li><span>${post.body}</span>`;
})
document.body.innerHTML=output;
},1000)
}
function createpost(post){
return new Promise((resolve,reject)=>{
setTimeout(()=>{
    posts.push(post);
    const error=false;
    if(!error){
        resolve();
    }else{
        reject("Error promise can't found the folder")
    }
    },2000);})
}
createpost({title:"post 3",body:"this is post 3 body"})
.then(getPosts)
.catch((res)=>{
document.body.innerHTML=res;
});
