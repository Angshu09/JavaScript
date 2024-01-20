const arr = [1, 2, 3];

// let myNums = arr.reduce(function (acc, currVal){
//     console.log(`acc: ${acc} and currvalue: ${currVal}`);
//     return acc + currVal;
// }, 3)

// let myNums = arr.reduce((acc, currVal) => acc+currVal, 3 ) //This is writtem using arraow functin

// console.log(myNums);

//********************************************************************************************************************************************************************************************************************************************************************* */


const shoppingCart = [
    {name: "Java Course", price: 1999},
    {name: "JavaScript Course", price: 2999},
    {name: "Python Course", price: 999}
]

const totalAmmountToPay = shoppingCart.reduce((acc, currval) => acc+currval.price, 0)
console.log(totalAmmountToPay); //5997

