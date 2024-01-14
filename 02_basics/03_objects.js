const myKey = Symbol("key1");

const person = {
    name: "Angshu",
    [myKey]: "key1", //syntax of declaring a key in a object
    college: "MAKAUT",
    location: "kalyani",
    "no": 567, // ---> here I can't access the data anyhow by .(dot) , I need to use only square brackets to access the data
    isLoggedIn: true,
    loggedInDays: ["monday", "tuesday"]
}

console.log(person.name); //method 1 of accessing the object data
console.log(person["college"]); //method 2 of accessing the object data
console.log(person[myKey]); //output - key1