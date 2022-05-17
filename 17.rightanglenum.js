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