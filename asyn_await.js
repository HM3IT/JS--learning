function  getPosts(){
    setTimeout(()=>{
        let output='';
    posts.forEach((res,index)=>{
    output+=`<li>${res.title}</li><h4>${res.body}</h4>`;
    })
    document.body.innerHTML=output;
    },1000)
    }
    let posts=[
        {title:"post1",body:"body for post1"},
        {title:"post2",body:"body for post2"},
        {title:"post3",body:"body for post3"}
    ];
    
    async function createPost(post){
    await setTimeout(()=>{
        posts.push(post);
        getPosts()
    },2000)}
    
    createPost({title:"Laboratory",body:"they are conducted in experiment by using the rat"})
    