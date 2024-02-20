function mul(num){
    return num * 5;
}

mul.Angshu = 4;

console.log(mul(2)) //10
console.log(mul.Angshu) //4
console.log(mul.prototype) //{}


// this is a fuinction but internally it behvaes like an object
function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
   return this.score + 1;
}

createUser.prototype.printMe = function(){
    console.log(this.username);
}

const person1 = new createUser("Angshu", 67);
const person2 = new createUser("Pritam", 68);

person1.printMe(); //Angshu
console.log(person1.increment()); //68

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
