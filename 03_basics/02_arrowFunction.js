const person = {
    name: "Angshu",
    college: "MAKAUT",

    greeting: function(){
        console.log(`${this.name} , is a student of ${this.college}`);
        console.log(this);
    }
}

// person.greeting(); 
//Angshu , is a student of MAKAUT
//{ name: 'Angshu', college: 'MAKAUT', greeting: [Function: greeting] }

person.name = "Rittu";

// person.greeting();
//Rittu , is a student of MAKAUT
//{ name: 'Rittu', college: 'MAKAUT', greeting: [Function: greeting] }

// console.log(this); //{}
// note - In the browser the global object is Window object

const anime = function(){
    let username = "Angshu Das";
    console.log(this.username);
}

// anime(); // undefined

const addTwoNum = (num1, num2) => {             //This is an arrow function
    return num1 + num2;
}
const result = addTwoNum(5, 6);
console.log(result);

const subtractTwoNum = (num1, num2) => num1 - num2;      //Implicit return
// const subtractTwoNum = (num1, num2) => (num1 - num2);   //We can also do this 
console.log(subtractTwoNum(10, 5));

const returnAObject = () => ({name: "Angshu"});  //By this we return an object
console.log(returnAObject()) //{ name: 'Angshu' }
