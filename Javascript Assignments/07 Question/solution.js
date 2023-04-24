// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

const values = ['apple', 'banana', 'pw skills','cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'ice cream', 'pw skills'];

let firstOccurance=values.indexOf('pw skills');

let lastOccurance=values.lastIndexOf('pw skills');

console.log(firstOccurance);
console.log(lastOccurance);
