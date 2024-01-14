
const multiArr = [true, "angshu", 78, 'c']; //Here we can use multitype array. data types can be mixed 
const names = ["IronMan", "CaptainAmerica", "Thor"];
console.log(names[2]);
console.log(names.length); // provide me the length of the array

const myArr = [2, 4, 6, 8, 12];
myArr.push(90);
console.log(myArr); //output - [ 2, 4, 6, 8, 12, 90 ] -> it adds the given number at the last of the array

myArr.pop(); //it removes the last number of the array
console.log(myArr) // output - [ 2, 4, 6, 8, 12 ]

myArr.unshift(45); //It adds the number at the same
console.log(myArr); // output- [ 45, 2, 4, 6, 8, 12 ]

myArr.shift(); //iT removes a number from the start of an array
console.log(myArr); //Output - [ 2, 4, 6, 8, 12 ]

console.log(myArr.indexOf(8)); // 3
console.log(myArr.includes(8)); // true

console.log(names.join()); //IronMan,CaptainAmerica,Thor


// slice and splice 
//slice return the array from given -> (start , end -1) ###It does not chnage the original array
//splice return the array from given ->(start, end) ***** it actually changes the original array 
const arr1 = [2, 64, 67,12, 90];

console.log(arr1.slice(1, 3)); // [ 64, 67 ]
console.log(arr1); // [ 2, 64, 67, 12, 90 ]

console.log(arr1.splice(1, 3)); // [ 64, 67, 12 ]
console.log(arr1); // [ 2, 90 ]




