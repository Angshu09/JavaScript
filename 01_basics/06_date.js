//Date a object in javaScript

let myDate = new Date();
// console.log(myDate); //2023-10-11T18:11:37.006Z
// console.log(myDate.toString()); //Wed Oct 11 2023 18:11:37 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toISOString()); //2023-10-11T18:12:50.598Z
// console.log(myDate.toJSON()); //2023-10-11T18:12:50.598Z
// console.log(myDate.toLocaleString()); //10/11/2023, 6:16:01 PM

let anotherMyDate = new Date(2023, 0, 24);
// console.log(anotherMyDate.toDateString()); //Tue Jan 24 2023

let anotherMyDate2 = new Date(2023, 1, 23);
// console.log(anotherMyDate2.toDateString()); //Thu Feb 23 2023

let myCreateDate = new Date(2023, 0, 25, 6, 4);
// console.log(myCreateDate.toLocaleString()); //1/25/2023, 6:04:00 AM

let createMyDate2 = new Date("01-23-2023");
// console.log(createMyDate2.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createMyDate2.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
} )