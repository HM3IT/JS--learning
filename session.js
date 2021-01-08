let form=document.querySelector('form');
let name=document.querySelector('.name');
let age=document.querySelector('.age');

 addLocal=user=>{
let member=JSON.stringify(user);
localStorage.setItem('Member',member);
}

getLocal=()=>{
let member=localStorage.getItem('Member');
return JSON.parse(member);
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let Inputname=name.value;
    let Inputage=age.value;
    let user={
        'name':Inputname,
        'age':Inputage
    }
    addLocal(user);
})
let dd=getLocal();
console.log(dd)