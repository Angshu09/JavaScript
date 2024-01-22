
const multiArr = [true, "angshu", 78, 'c']; //Here we can use multitype array. data types can be mixed 
const names = ["IronMan", "CaptainAmerica", "Thor"];
// console.log(names[2]);
// console.log(names.length); // provide me the length of the array

const myArr = [2, 4, 6, 8, 12];
myArr.push(90);
// console.log(myArr); //output - [ 2, 4, 6, 8, 12, 90 ] -> it adds the given number at the last of the array

myArr.pop(); //it removes the last number of the array
// console.log(myArr) // output - [ 2, 4, 6, 8, 12 ]

let a = myArr.unshift(45); //It adds the number at first of the array and returns the new length of the array
// console.log(myArr); // output- [ 45, 2, 4, 6, 8, 12 ]
// console.log(a); // the length of the array is now 6.

let removedElement = myArr.shift(); //iT removes a number from the start of an array and returns the removed number 
// console.log(myArr); //Output - [ 2, 4, 6, 8, 12 ]
// console.log(removedElement); //45

// console.log(myArr.indexOf(8)); // 3
// console.log(myArr.includes(8)); // true

// console.log(names.join()); //IronMan,CaptainAmerica,Thor
/* The join() method in JavaScript is used to create and return a new string by concatenating all elements in an array or array-like object. It joins the elements using a specified separator. If no separator is provided, the default separator is a comma ,. */


// slice and splice 

//slice return the array from given -> (start , end -1) ###It does not chnage the original array
/* The slice() method is used to extract a portion of an array and return a new array containing the extracted elements.*/

//splice return the array from given ->(start, end) ***** it actually changes the original array 
/* The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. */

const arr1 = [2, 64, 67,12, 90];

console.log(arr1.slice(1, 3)); // [ 64, 67 ]
console.log(arr1); // [ 2, 64, 67, 12, 90 ]

console.log(arr1.splice(1, 3)); // [ 64, 67, 12 ]
console.log(arr1); // [ 2, 90 ]




