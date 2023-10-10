const score = 400
// console.log(score);

const ammount = new Number(100);
// console.log(ammount); //Output - [Number: 100]

// console.log(ammount.toString()); // "100"
// console.log(ammount.toString.length); // It gives me 3
// console.log(ammount.toFixed(2)); //It gives me 100.00

const otherNumber = 123.8790
// console.log(otherNumber.toPrecision(3)); //It gives me 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) //US standard
// console.log(hundreds.toLocaleString('en-IN')) //indian standard

//**********************************************MATHS************************************************** */

console.log(Math);
console.log(Math.abs(-4)); // it just converts the negative number to positive
console.log(Math.round(4.2)); // it gives me 4 but if I put 4.5 or greater then it will give me 5 (Actually this method is used to return a round up value of a number)
console.log(Math.ceil(4.1)); // it always give me upper number
console.log(Math.floor(4.9)); // it always give me lower or that number 
console.log(Math.min(3, 1, 5, 6, 9)); // It gives me the smaller number in this case 1
console.log(Math.max(19, 5, 3, 2)); // it gives me the greatest number in this case 19