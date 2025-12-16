let numbers = [1, 2, 3, 4, 5];
var squaredNumbers = numbers.map((num)=>num**num);
    console.log(squaredNumbers);


let evenNumbers = numbers.filter((num)=> num % 2 === 0);
    console.log(evenNumbers);

let sum = numbers.reduce((accumulator, currentValue) => {
    accumulator + currentValue;
   return accumulator;
}, 0);
console.log(sum);
