const name = "Angshu"
const repoCount = 20

// console.log(name + repoCount + "Value") //This is old version

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //This is a modern way of printing the values 
 
 const gameName = new String('The morning is upon us') // create string using object

//  console.log(gameName[0]) //it returns the 0th index character of the string
//  console.log(gameName._proto_); // A property of Object.prototype is an accessor property that exposes the [[Prototype]] of the object through it is accessed.
//  console.log(gameName.length); // It returns the total length of the string
//  console.log(gameName.toLowerCase); // it converts the string at lowecase
//  console.log(gameName.charAt(2)); // it returns the given index's character
//  console.log(gameName.indexOf('m')); // it returns the index of the given character from the String

// const newString = gameName.substring(0, 3) //it creates a substring of the main String from 0 to less than 4 (Given number)
// console.log(newString)
// const anotherString = gameName.slice(-2, 3) //extracts the text from one string and returns a new string. Changes to the text in one string do not affect the other string 
// console.log(anotherString) 

// const newStringOne = "     Angshu      ";
// console.log(newStringOne)
// console.log(newStringOne.trim()) // it removes all the white spaces from the string

// const url = "angshu://angshu.com/angshu%20das"
// console.log(url.replace('%20', '-')); //it replaces %20 to -
// console.log(url.includes('angshu')) // it return true actually checks that the angshu is present in the url string or not
// console.log(url.includes('bishnupur')); //it returns false

const city = "Bishnupur-Bankura-WestBengal";
console.log(city.split('-')); // it should give me [ 'Bishnupur', 'Bankura', 'WestBengal' ] actually it splits the string basis " - " and creates an array.