// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

const even=[];
const odd=[];

let i=0;
while(i<=100){
  if(i%2==0){
    even.push(i);
  }
  else{
    odd.push(i);
  }
  i++;
}

console.log(even);
console.log(odd);


