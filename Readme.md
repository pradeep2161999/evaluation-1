# Evaluation-1

## 1.Check prime number?

```Javascript
var num, i, n=0;
num=12;
for(i=2; i<num; i++)
{
  if(num%2==0)
  {
    n++;
    break;
  }
}
if(n==0)
  console.log(num + " is a Prime Number");
else
  console.log(num + " is not a Prime Number");
```

Output:
PS F:\Yavar\evaluation-1> node 1.primenumber.js
12 is not a Prime Number

## 2.what is the difference between == and === with an example?

### == Operator:

It is an abstract equality operator.the equality operator check whether the operands is true or false.it can be check only the value is same.

```Javascript
"hi" == "hi"
true
1 == "1"
true
```

### === operator:

It is a strict equality operator.It will not do the type conversion if the two values are not as the sametype when compared it will return false.

```Javascript
1 === "1"
false
1 === 1
true
```

## 3.How would you reverse a string in javascript?

```Javascript
function reverse(str){
    let arr = [];
    for (let i = 0; i <str.length; i++){
        arr.unshift(str[i])
    }
    return arr.join('');
    };
    console.log(reverse("Helloworld"));
```

Output:
PS F:\Yavar\evaluation-1> node 3.reversestring.js
dlrowolleH

## 4.How would you reverse a word in a sentence?

```Javascript
const string = "My Name is Billa"

console.log(string.split(" ").reverse().join(" "));
```

Output:
PS F:\Yavar\evaluation-1> node 4.reverseawordinsentence.js
Billa is Name My

## 5.How will you verify a word as a palindrome?

```Javascript
function palindrome(str){
    var reversed = str.split("").reverse().join("");
    if(reversed === str){
        return "palindrome";

    }
    else{

        return "notpalindrome";
}
}
console.log(palindrome("racecar"));
```

Output:
PS F:\Yavar\evaluation-1> node 5.palindrome.js
palindrome

## 6.Write your own program to explain the difference between foreach and map?

### foreach

for each element can execute a function for everytime in an array.Each iteration step can be received 3 arguments value,index and object.It is similar to the for loop

```Javascript
let animals =['Tiger',
           'lion',
           'leopard',
           'zebra',
           'giraffee']
let print = function(item,index,object){
   console.log(item,index,object);
}
animals.forEach( print );
```

Output:
Tiger 0 [ 'Tiger', 'lion', 'leopard', 'zebra', 'giraffee' ]
lion 1 [ 'Tiger', 'lion', 'leopard', 'zebra', 'giraffee' ]  
leopard 2 [ 'Tiger', 'lion', 'leopard', 'zebra', 'giraffee' ]
zebra 3 [ 'Tiger', 'lion', 'leopard', 'zebra', 'giraffee' ]  
giraffee 4 [ 'Tiger', 'lion', 'leopard', 'zebra', 'giraffee' ]

### map

It can be give a return value it is a copy of original value with modified arrays and also the original array is unchanged

```Javascript
let numbers = [0,1,3,5,6,257,9988];
let result = numbers.map(value => value = value + 1);
console.log(result);
```

Output:
[
1, 2, 4,
6, 7, 258,
9989
]

## 7.Generate a random number between 1 to 5?

```Javascript
function RandomRange(myMin,myMax){
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
}
var myRandom = RandomRange(1,5);
console.log(myRandom);
```

Output:
PS F:\Yavar\evaluation-1> node 7.generateanumber.js
4

## 8.Remove duplicate from the following array:

```Javascript
   var arr = [1,2,9,4,5,8,3,5,1,4,5];

    function removeDuplicates(arr) {
        return [...new Set(arr)];
    }

    console.log(removeDuplicates(arr));
```

Output:
PS F:\Yavar\evaluation-1> node 8.removeduplicatefromanarray.js
[
1, 2, 9, 4,
5, 8, 3
]

## 9.write a program to calculate the Sum of first 10 natural number:

```Javascript
let n=0;
    for(i =1; i<=10;i++){
        n = n + i;
    }
 console.log("sum of first 10 natural number:" +n);
```

Output:
PS F:\Yavar\evaluation-1> node 9.sumof10naturalnumber.js  
sum of first 10 natural number:55

## 10.Write a program to print the sum of the even and odd numbers for a given number?[100]

```Javascript
let odd = 0;
let even = 0;
for(i=1; i<=100; i++){
    if(i %2 === 0){
        odd = odd + i;
    }
    else{
        even = even + i
    }
}
console.log("Odd Number is " +odd);
console.log("even number is " +even);
```

Output:
PS F:\Yavar\evaluation-1> node 10.sumofoddandeven.js
Odd Number is 2550
even number is 2500

## 11.write a program to merge two arrays?

```Javascript
arr1 = [1,2,3]
arr2 = [6,7,9]
merge =[...arr1,...arr2]
console.log("Merge two arrays = "  +merge)
```

Output:
PS F:\Yavar\evaluation-1> node 11.merge.js
Merge two arrays = 1,2,3,6,7,9

## 12. Remove duplicate from an array of an object by id and name?

## a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name:

## ‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}]

```Javascript
let array = [{id: 1, name: "Stephen covey" }, {id: 2, name: "Robin Sharma" }, {id: 3, name:
    "Tolstoy"}, {id: 3, name: "Tolstoy"}, {id: 5, name: "James clear"}];


let q = [...new Map(array.map(obj => [JSON.stringify(obj), obj])).values()];

console.log(q)
```

Output:
PS F:\Yavar\evaluation-1> node 12.removeduplicatearray.js
[
{ id: 1, name: 'Stephen covey' },
{ id: 2, name: 'Robin Sharma' },
{ id: 3, name: 'Tolstoy' },
{ id: 5, name: 'James clear' }
]

## 13.Compare two objects,if all the properties are equal return true or false?

## a. ({id:1 ,name:"edison"},{id:1 ,name:"edison"})

## b. ({id:1 ,name:"edison"},{id:2 ,name:"edison"})

```Javascript
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
```

Output:
PS F:\Yavar\evaluation-1> node 13.comparetwoobject.js
object 1 is equal to object 2 value is True
object 1 is not equal to object 2 value is false

## 14.Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600],

## [2000,1000]]

```Javascript
let multi =[1,4,2,3,[10,20,20], [100,[500,700],600],[2000,1000]]
console.log(multi.flat(Infinity))
```

Output:

```Javascript
PS F:\Yavar\evaluation-1> node 14.multidimensionalarray.js
[
     1,   4,   2,    3,
    10,  20,  20,  100,
   500, 700, 600, 2000,
  1000
]
```

## 15. Group by the id of the following array of objects using the Array.reduce method?

## [{id: 1, name: ‘edison’ }, {id: 2, name: ‘Annand’ }, {id: 3, name: ‘Vasnath’}]

```Javascript
function groupById(nameList){
let group_id = nameList.reduce ((arr,nameList) => {
   arr.push(nameList.id);
   return arr;
},[] )
console.log(group_id);
}
groupById([{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"}]);
```

Output:

```Javascript
PS F:\Yavar\evaluation-1> node 15.arrayreduce.js
[ 1, 2, 3 ]
```

## 16.Write a program in javascript to display the pattern like rightangle triangle using an asterik.the patterns are,

```Javascript
*
**
***
****
*****
```

```Javascript
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
     string += "*";
  }
 string += "\n";
}
console.log(string);
```

Output:

```Javascript
PS F:\Yavar\evaluation-1> node 16.asterik.js
*
**
***
****
*****
```

## 17.write a program in javascript to make such a pattern like right angle triangle with a number increased by 1.

# 1

# 2 3

# 4 5 6

# 7 8 9 10

```Javascript
let n =4;
let string = "";
let count =1;
for(i=1;i<=n;i++){
    for(j=0;j<i;j++){
        string+=count+ " ";
        count++;
        }
        string+="\n";
}
console.log(string);
```

Output:
PS F:\Yavar\evaluation-1> node 17.rightanglenum.js
1
2 3
4 5 6
7 8 9 10

## 18. Write a program in Javascript to make such a pattern like a pyramid with numbers

## increased by 1

```Javascript
let n = 5;
let string = "";
let count =1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= i - 1; k++) {
    string += " "+ count;
    count++
  }
  string += "\n";
}
console.log(string);
```

Output:

```Javascript

    1
   2 3
  4 5 6
 7 8 9 10
```

## 19.Write a program in Javascript to display the pattern like a diamond

```Javascript
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

```Javascript
let n = 5;
let string = "";
// Pyramid
for (let i = 1; i <= n; i++) {
  for (let j = 1; j < n - i + 1; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// Reverse Pyramid
for (let i = 1; i <= n - 1; i++) {
  for (let j = 1; j < i + 1; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * (n - i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
```

Output:

```Javascript
PS F:\Yavar\evaluation-1> node 19.displaythepatternlikediamond.js
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

## 20. Explain following terms

## a. console.log

## b. console.dir

## c. console.count

## d. console.table

## e. console.time/timeLog/timeEnd

## f. console.trace

## g. console.group/groupEnd

## h. console.assert

## a. console.log

The console.log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.

```Javascript
var a = "I love India";
function b(){
   return(12*3);
}
console.log(b());
console.log(a);
```

## console.dir

the console.dir() method is used to get the object properties of the specify the object.These object properties also have child object.

```Javascript
let obj1={
    name: "Pradeep",
    course: "Information Technology"
}
console.dir(obj1);
```

## console.count

console.count is a method used to count the function can be call how many times to print with the statement given in the count

```Javascript
for (let i = 0; i < 5; i++) {
      console.count();
}
```

## console.table

```Javascript
let obj2={
    name: "Pradeep",
    course: "Information Technology"
}
console.table(obj2);
```

## console.time\timelog\timeend

```Javascript
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
console.log(hi);
console.timeLog();
```

## console.trace

the trace of method displays a trace that shows the code ended up at a certain point.

```Javascript
function myFunction() {
  myOtherFunction();
}

function myOtherFunction() {
  console.trace();
}
```

## console.group\groupend

```Javascript
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.groupEnd();
console.log("and we are back.");
```
