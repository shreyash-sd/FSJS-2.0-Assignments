// 17. Write a program which tells the number of days in a month.
let month="september"

if(month=="April" || month=="June" || month=="September" || month=="November" ){
    console.log("30 Days");
}
else if(month=="January" || month=="March" || month=="May" || month=="July" || month=="August" || month=="October" || month=="December" ){
    
    console.log("31 Days");
}
else if(month=="February"){
    console.log("28 Days");
}
else{
    console.log("Please Input Valid month");
}