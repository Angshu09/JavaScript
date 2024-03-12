// let myname = "Angshu    ";
// console.log(myname.trueLength()) //I want trueLength as a function that eventually returns the main length without length of white spaces
// console.log(myname.trim().length);


Object.prototype.ownerName = function(){
    console.log("the owner of the repo is Angshu Das");
} //By this I inject the ownerName to the main object proto

Array.prototype.greetToOwner = function(){
    console.log("Hi! Angshu");
} //By this I only inject this function to the Array

let myHeros = ["thor", "spiderman", "ironman"]; //This is an object

const heroPower = {
    thor: "Hammer",
    spiderman: "web",

    spiderPower: function(){
        console.log("spiderman use web shooter");
    },

    thorPower: function(){
        console.log("thor us hammer");
    }
} //This is an object 

console.log(heroPower.thor); //Hammer
heroPower.spiderPower(); //spiderman use web shooter

heroPower.ownerName(); //the owner of the repo is Angshu Das
myHeros.ownerName(); //the owner of the repo is Angshu Das

myHeros.greetToOwner(); //Hi! Angshu
// heroPower.greetToOwner(); //Error //Because in the main object I did not inject this function 


// INHERITANCE
const user = {
    teacherName: "XYZ",
    gmail: "XYZ@mail.com"
}

const teacher = {
    makevideo: true,
    __proto__: user //By this teacher inherits the properties of user
}

console.log(user.teacherName);
console.log(teacher.gmail);

const teacherSupport = {
    isAvailable: true,
    __proto__: teacher
}

const taSupport = {
    assignment: "js"
}

const Company = {
    title: "ABC Company"
}

Company.__proto__ = teacherSupport;

console.log(Company.name)
console.log(Company.isAvailable)

// NEW SYNTAX 
Object.setPrototypeOf(taSupport, teacherSupport);

console.log(taSupport.teacherName) //XYZ



String.prototype.trueLength = function(){
    // console.log(this); //[String: 'AngshuDas       ']
    return this.trim().length;
}

const newName = "AngshuDas       "
console.log(newName.length);
console.log(newName.trueLength());