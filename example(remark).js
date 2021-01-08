let str1="STring1";
let str2=new String("STring1");

function isString(str){
    return typeof str=="string"||str instanceof String;
}

function isNum(num){
    return typeof num=="number" && !Number.isNaN(num);
}
function isNull(num){
    return num==null;
}
console.log(isNull(0))