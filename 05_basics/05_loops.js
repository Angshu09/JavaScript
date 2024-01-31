// const arr = ["java", "Javascript", "python", "ruby" ];

// const values = arr.forEach((item) => {
//     console.log(item);
//     return item;
// })                                       //For each loop does not return anything 

// console.log(values);

// **********************************************************************************************************************************************************************************************************************************************

// const myNums = [1, 2, 3 ,4, 5 ,6, 7, 8, 9, 10];

// const newNums = myNums.filter((item) => (
//     item>4
// ))
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
// Returns the elements of an array that meet the condition specified in a callback function.
//If I start a scope and I want to return something then I need to write return explicitly

// const newNums = [];
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// }) //By this way we returned the values that mathed the conditions using for each loop
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

//*********************************************************************************************************************************************************************************************************************************************************** */

//Example using filter method
const books = [
    {Name: "Book1", genre: "History", publish: 1997, edition: 2023},
    {Name: "Book2", genre: "science", publish: 1997, edition: 2009},
    {Name: "Book3", genre: "general knowledge", publish: 1996, edition: 2024},
    {Name: "Book4", genre: "science", publish: 1992, edition: 2020},
    {Name: "Book5", genre: "finance", publish: 2003, edition: 2024}
] //this an array of objects

let newBooks = books.filter((bk) => {return bk.genre === "History"})
newBooks = books.filter((bk) => bk.edition >= 2020)
console.log(newBooks)
