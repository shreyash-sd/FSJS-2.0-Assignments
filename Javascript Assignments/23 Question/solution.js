// 23. Write a program to check that the number given by the user is a prime number or not.

let Number=97;
let count=0;
if (Number === 1) {
    console.log("1 is neither prime nor composite number.");
}

for(let i=0;i<=Number;i++){
    if(Number%i==0){
        count++;
    }
}

if(count<=2){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}