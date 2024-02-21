console.log(Math.PI); //3.141592653589793
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const course = {
    name: "BCA",
    duration: "3 years",
    domain: "IT",
    isAvailableJava: function(){
        return true;
    }
}

console.log(Object.getOwnPropertyDescriptor(course, "duration"));
//{
//     value: '3 years',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }

// Object.defineProperty(course, 'duration', {
//     writable : false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(course, "duration"));
//{
//     value: '3 years',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }

for(let [key, value] of Object.entries(course)){
    if(typeof value === 'function'){
        continue;
    }
    console.log(`${key} : ${value}`);
}
  