// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort();
console.log(ages);

minValue=Math.min(...ages);
console.log(minValue);

maxValue=Math.max(...ages);
console.log(maxValue);

// Find the median age(one middle item or two middle items divided by two)
const midpoint=Math.floor((ages.length)/2);
const median=ages.length%2==1 ? 
 ages[midpoint] :
 (ages[midpoint-1]+ages[midpoint])/2;

 console.log(median);


// Find the average age(all items divided by number of items)
let sum=0;
ages.forEach((Element)=>{
    sum+=Element;
})
average=sum/ages.length;
console.log(average);

// - Find the range of the ages(max minus min)
range=maxValue-minValue;
console.log(range);

// Compare the value of (min - average) and (max - average), use abs() method
let minMinusaverage=minValue-average;
let maxMinusaverage=maxValue-average;

console.log(Math.abs(minMinusaverage-maxMinusaverage));