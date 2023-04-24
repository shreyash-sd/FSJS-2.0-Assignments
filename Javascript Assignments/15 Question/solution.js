// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
let grades=95;

if(grades>=80 && grades<=100){
    console.log("A");
}
else if(grades>=70 && grades<=89){
    console.log("B");
}
else if(grades>=60 && grades<=69){
    console.log("C");
}
else if(grades>=50 && grades<=59){
    console.log("D");
}
else{
    console.log("F");
}