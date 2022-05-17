function RandomRange(myMin,myMax){
    return Math.floor(Math.random()*(myMax-myMin+1))+myMin;
}
var myRandom = RandomRange(1,5);
console.log(myRandom);