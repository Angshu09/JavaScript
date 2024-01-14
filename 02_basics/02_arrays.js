const marvel_heros = ["Ironman", "Thor", "CaptainAmerica", "Spiderman"];
const dc_heros = ["Batman", "SuperMan", "Flash", "WonderWoman"];


// marvel_heros.push(dc_heros)  //It becomes a 2d array
// console.log(marvel_heros); 
/*[
    'Ironman',
    'Thor',
    'CaptainAmerica',
    'Spiderman',
    [ 'Batman', 'SuperMan', 'Flash', 'WonderWoman' ]
 ] */


// console.log(marvel_heros.concat(dc_heros)); //It returns a new array -> 
/* [
  'Ironman',
  'Thor',
  'CaptainAmerica',
  'Spiderman',
  'Batman',
  'SuperMan',
  'Flash',
  'WonderWoman'
] */


// const newArr = [...marvel_heros, ...dc_heros]; // it spread out the every element of the array
// console.log(newArr);
/*
[
  'Ironman',
  'Thor',
  'CaptainAmerica',
  'Spiderman',
  'Batman',
  'SuperMan',
  'Flash',
  'WonderWoman'
]
*/

const numberArray = [2, 4, 6, [3, 6, 9], 3, 8, [4, 8, [8, 12, 78]]];
// console.log(numberArray.flat(1)); //[ 2, 4, 6, 3, 6, 9, 3, 8, 4, 8, [ 8, 12, 78 ] ]
// console.log(numberArray.flat(Infinity)); // [ 2, 4, 6, 3, 6, 9, 3, 8, 4, 8, 8, 12, 78]


console.log(Array.isArray(numberArray)); //true
console.log(Array.isArray("Angshu")); //false
console.log(Array.from("Angshu")); //[ 'A', 'n', 'g', 's', 'h', 'u' ]
console.log(Array.from({name: "Angshu"})); // it gives me a blank array becuse it cannot able to convert it in an array

let score1 = 600;
let score2 = 890;
let score3 = 567;

const scoreArr = Array.of(score1, score2, score3);
console.log(scoreArr); // [ 600, 890, 567 ]