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