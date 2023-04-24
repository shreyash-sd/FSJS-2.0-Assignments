// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date=new Date();

console.log(date.getFullYear().toString(),"-",(date.getMonth()+1).toString().padStart(2,"0"),"-",date.getDate().toString().padStart(2,"0")+"  "+date.getHours().toString().padStart(2,"0")+":"+date.getMinutes().toString().padStart(2,"0"));
// 2023 - 04 - 19  22:14

console.log(date.getDate().toString().padStart(2,"0")+"-"+date.getMonth().toString().padStart(2,"0")+"-",date.getFullYear().toString())