const arr = [3, 6, 8, 9];

// for(const a of arr){
//     console.log(`no is - ${a}`);
// }

const greeting = "Hello World";
// for(const greet of greeting){
//     console.log(greet);
// }

// Maps in JS
const map = new Map(); //Maps are known as unique values and it maintains the sequence of order
map.set('IN', "India");
map.set('USA', "United States Of America");
map.set('Fr', "France");
// console.log(map);

// for(const key of map){
//     console.log(key);
// }
// [ 'IN', 'India' ]
// [ 'USA', 'United States Of America' ]
// [ 'Fr', 'France' ]

for(const [key, value] of map){
    console.log(key, ':-', value);
}
// IN :- India
// USA :- United States Of America
// Fr :- France