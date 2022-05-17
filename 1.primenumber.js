var num, i, n=0;
num=13;
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