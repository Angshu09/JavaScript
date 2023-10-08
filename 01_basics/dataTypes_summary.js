//Premetive Data types (7 types):
// String, Number, Boolean, null, undefined, symbol, BigInt

//Reference (Non Primitive)
//Arrays, Objects, Functions

const score = 100 
const scoreValue = 100.3
// Both are number types

const isLoggedIn = false //boolean
const outSideTemp = null //this is completely empty
let userEmail = undefined //undefined
let userEmail2 ; //this is also undefined


const id = Symbol('123')
const anotherId = Symbol('123') 
//this two are not equal 
console.log(id === anotherId) //it throws me false because this two are not equal


const bigNumber = 6448648737684n //This is BigInt, the n which is present end of the number indicates BigInt


const heroes = ["Ironman", "Thor", "SpiderMan", "CaptainAmerica"]; //this is an String Array


let obj = {
    name: "Angshu",
    age: 19,
}       //This is an object


const myFun = function(){
    console.log("Hello World");
}           // A return of function is called object function

//******************************************************************************************************* */

//Stack (primitive), Heap (Non-Primitive)
let myYouTubeName = "The Beyadob"
let anotherName = myYouTubeName
console.log(anotherName);
anotherName = "Angshu Gamer"
console.log(anotherName)
console.log(myYouTubeName)

let userOne = {
    email: "angshudas191@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne
console.log(userOne)
console.log(userTwo) //this two are refernece variables pointing to the same object

userTwo.email = "makaut@gmail.com" //it change the main object's email
console.log(userOne.email)
console.log(userTwo.email) 
