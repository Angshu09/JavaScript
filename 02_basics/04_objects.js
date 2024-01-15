// const person = new Object(); // Another way to declare a object
const person = {}
person.name = "Angshu";
person.gmail = "angshudas191@gmail.com";
person.college = "Maualana Abul Kalam Azad University Of Technology"

console.log(`hey! my name is ${person.name} and I am a student of ${person.college}` );
//hey! my name is Angshu and I am a student of Maualana Abul Kalam Azad University Of Technology

const name = {
    fullName : {
        firstName : {
            name: "Angshu"                   //by this way we can make nesting of objects
        },

        lastName : {
            lastname: "Das"
        }
    }
}

console.log(name.fullName); // { firstName: { name: 'Angshu' }, lastName: { lastname: 'Das' } }
console.log(name.fullName.firstName.name); // Angshu

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b" };
const obj3 = {5: "a", 6: "b"};

// const obj4 = {obj1, obj2, obj3};
/*  {
  obj1: { '1': 'a', '2': 'b' },
  obj2: { '3': 'a', '4': 'b' },
  obj3: { '5': 'a', '6': 'b' }
}  */

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// const obj4 = {...obj1, ...obj2, ...obj3}; 
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(obj4);

console.log(person);
console.log(Object.keys(person)); // [ 'name', 'gmail', 'college' ]
console.log(Object.values(person)); // ['Angshu', 'angshudas191@gmail.com', 'Maualana Abul Kalam Azad University Of Technology']
console.log(Object.entries(person)); // [['name', 'Angshu'], ['gmail', 'angshudas191@gmail.com'], ['college', 'Maualana Abul Kalam Azad University Of Technology']]
console.log(Object.keys(person).length); // 3
