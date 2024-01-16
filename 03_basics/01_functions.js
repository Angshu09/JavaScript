function sum (num1, num2){
    return num1 + num2;
}

// console.log(sum(2, 3));

function greeting(name = "mr-x"){
    return `${name} Hi! Good morning`;
}

// console.log(greeting("Angshu"));

function show(...number){
    return number;
}

// console.log(show(45, 67, 89, 12)); // [ 45, 67, 89, 12 ]

const person = {
    name: "Angshu",
    year: 2024
}

function showObj(anyObjcet){
    console.log(`hey ${anyObjcet.name} this is your 2nd year ${anyObjcet.year}`);
}

// showObj(person) //hey Angshu this is your 2nd year 2024

showObj({
    name: "mr-x",
    year: 2000
})  // hey mr-x this is your 2nd year 2000

function secondIndex(anyArray){
    return anyArray[1];
}

const arr = [3, 6, 8, 9, 1];
console.log(secondIndex(arr)); //6
console.log(secondIndex([5, 8, 12, 5])); //8