// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const prompt=require("prompt-sync")();

const number=prompt("Enter the File-Name: ");

const extension=number.split(".").pop();

console.log(extension);