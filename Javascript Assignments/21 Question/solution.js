// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries 

let countries=["India","USA","UK"];

let includesEthopia=countries.includes("Ethopia");

if(includesEthopia==true){
   console.log(countries[countries.indexOf("Ethopia")]);
}
else{
    countries.splice(countries.length,0,"Ethopia");
}
console.log(countries);

