function compare(obj1,obj2){
let a = JSON.stringify(obj1);
let b  = JSON.stringify(obj2);
if(a===b){
    return("object 1 is equal to object 2 value is True");
}
else{
    return("object 1 is not equal to object 2 value is false");
}
}
console.log(compare({
    id:1,
    name:"edison"}
,
{
    id:1,
    name:"edison"
}))
console.log(compare({
    id:2,
    name:"edison"
},
{
    id:1,
    name:"edison"
}))
