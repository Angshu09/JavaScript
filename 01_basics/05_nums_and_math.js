const score = 400
// console.log(score);

const ammount = new Number(100);
// console.log(ammount); //Output - [Number: 100]

// console.log(ammount.toString()); // "100"
// console.log(ammount.toString.length); // It gives me 3
// console.log(ammount.toFixed(2)); //It gives me 100.00 //It also returns me String = "100.00"

const otherNumber = 123.8790
// console.log(otherNumber.toPrecision(3)); //It gives me 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString()) //US standard
// console.log(hundreds.toLocaleString('en-IN')) //indian standard



//**********************************************  MATHS  ************************************************** */



console.log(Math);
console.log(Math.abs(-4));             // It just converts the negative number to positive
console.log(Math.round(4.2));          // It gives me 4 but if I put 4.5 or greater then it will give me 5 (Actually this method is used to return a round up value of a number)
console.log(Math.ceil(4.1));           // It always give me upper number
console.log(Math.floor(4.9));          // It always give me lower or that number 
console.log(Math.min(3, 1, 5, 6, 9));  // It gives me the smaller number in this case 1
console.log(Math.max(19, 5, 3, 2));    // It gives me the greatest number in this case 19
console.log(Math.random());             // It gives me a value between 0 - 1
console.log((Math.random() * 10) + 1);  //It gives me value between 1 - 9 (For avoiding 0 we add 1 )
console.log(Math.floor(Math.random() * 10) + 1); //It gives me single digit value between 1 - 9


const min = 10
const max  = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //It gives random values between a specific range



