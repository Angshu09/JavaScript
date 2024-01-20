const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNums = myNums.map((num) => num + 10);
// console.log(newNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let newNums = myNums
                    .map((num) => num * 10) //here every num of the array multiplied by 10 and passed to next map function
                    .map((num) => num + 1) //here every num is added by 1
                    .filter((num) => num >= 40) //here every num that are greater than or equal 40 return to newNums array

console.log(newNums);  //[41, 51, 61, 71, 81, 91, 101]





