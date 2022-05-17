//console.log()
/*The console.log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.*/
var a = "I love India";
function b(){
   return(12*3);
}
console.log(b());
console.log(a);
//console.dir()
/*the console.dir() method is used to get the object properties of the specify the object.These object properties also have child object.*/ 
let obj1={
    name: "Pradeep",
    course: "Information Technology"
}
console.dir(obj1);
//console.count()
/*console.count is a method used to count the function can be call how many times to print with the statement given in the count()*/
for (let i = 0; i < 5; i++) {
      console.count();
}
//console.table
let obj2={
    name: "Pradeep",
    course: "Information Technology"
}
console.table(obj2);
//console.time\timelog\timeend
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
console.log(hi);
console.timeLog();
//console.trace
/*the trace of method displays a trace that shows the code ended up at a certain point.*/
function myFunction() {
  myOtherFunction();
}

function myOtherFunction() {
  console.trace();
}
//console.group\groupend
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");