const myKey = Symbol("key1");

const person = {
    name: "Angshu",
    [myKey]: "key1", //syntax of declaring a key in a object
    college: "MAKAUT",
    location: "kalyani",
    "no": 567, // ---> here I can't access the data anyhow by .(dot) , I need to use only square brackets to access the data
    isLoggedIn: true,
    loggedInDays: ["monday", "tuesday"],
    gmail: "angshu@gmail.com"
}

// console.log(person.name); //method 1 of accessing the object data
// console.log(person["college"]); //method 2 of accessing the object data
// console.log(person[myKey]); //output - key1

// person.gmail = "angshudas191@gmail.com" //update gmail
// console.log(person["gmail"]); 

// Object.freeze(person); //By this we freez our object we can't modify the object elements anymore
// person.gmail = "Anything"; //It don't gives error but gmail value remain same.
// console.log(person["gmail"]); 

person.greeting = function(){
    console.log("Hello world");
}

console.log(person.greeting); //[Function (anonymous)]
console.log(person.greeting());
//   Hello world
//   undefined

person.greeting2 = function(){
    console.log(`Hello this is ${this.name}`);
}
console.log(person.greeting2());  // Hello this is Angshu