// write a Javascript program to find the number of days in a month.

let month="February";
let year="2024"

if(month=="April" || month=="June" || month=="September" || month=="November" ){
    console.log("30 Days");
}
else if(month=="January" || month=="March" || month=="May" || month=="July" || month=="August" || month=="October" || month=="December" ){
    
    console.log("31 Days");
}
else if(month=="February"){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        console.log("29 Days");
    }
    else 

    console.log("28 Days");
}
else{
    console.log("Please Input Valid month");
}
 



