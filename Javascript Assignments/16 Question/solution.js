// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
let season="April";

if(season=="September" || season=="October" || season=="November"){
    console.log("Autumn");
}

else if(season=="December" || season=="January" || season=="February"){
    console.log("Winter");
}

else if(season=="March" || season=="April" || season=="May"){
    console.log("Spring");
}
else if(season=="June" || season=="July" || season=="August"){
    console.log("Summer");
}

else{
    console.log("Please input Valid month");
}