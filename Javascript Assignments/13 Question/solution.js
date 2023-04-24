// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.





const prompt = require('prompt-sync')(); // import prompt-sync module

const age = parseInt(prompt('Enter your age: ')); // get user input as integer

if (age >= 18) {
  console.log('You are old enough to drive.');
} else {
  const yearsToWait = 18 - age;
  console.log(`You are not old enough to drive. Please wait for ${yearsToWait} more year(s).`);
}




