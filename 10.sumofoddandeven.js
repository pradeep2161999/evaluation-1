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