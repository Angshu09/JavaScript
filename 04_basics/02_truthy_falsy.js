const userName = "Angshu";

if(userName){ //It gives me true
    console.log("Hey this is function");
}

//Falsy values in jS --->
// false, 0, -0, BigInt 0n, "", null, undefined, NaN  

//Truthy values
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){
    console.log("the object is empty");
}

// false == 0 ---> true
//false == '' ---> true
// 0 == '' ---> true


// Nullish Coalescing operator (??): null & undefined
let val1;
// val1 = 5 ?? 4;                    //5
// val1 = null ?? 12;               //12
// val1 = undefined ?? 34;          //34
val1 = null ?? 3 ?? 9;              //3

console.log(val1);



//Terniary Operator
//syntax --->  condition ? true : false
// Example --->
const icePrice = 100;
icePrice >= 80 ? console.log("ice price is greater") : console.log("ice price is lesser");
