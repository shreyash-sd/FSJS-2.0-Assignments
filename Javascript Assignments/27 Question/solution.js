// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

for(let i=2;i<=100;i++){
    let count=0;
    for(let k=1;k<=i;k++){
        if(i%k==0){
            count++;
        }
    }
    
    if(count<=2){
        console.log(i);
    }
}