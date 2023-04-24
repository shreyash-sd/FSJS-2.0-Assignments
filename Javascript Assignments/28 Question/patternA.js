// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***
	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//  	   *****

const prompt=require("prompt-sync")();

const num=prompt("Enter the Number: ");

let string = "";
for(var i=0; i <=num; i++){
    for(var j=0; j < i; j++){
        string += "*";
    }
    string += "\n";
}

console.log(string);

