// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let arr = ["abcdefgh", "abcd", "abcdefghij", "abcdeg", "abcdefghijkljhd"]
console.log(setHouse(arr));

function setHouse(arr) {
    let house = [];
    for (const students of arr) {
        if(students.length < 6){
            house.push('Gryffindor');
        }
        else if(students.length >=6 && students.length <8){
            house.push('Hufflepuff');
        }
        else if(students.length >=8 && students.length <12){
            house.push('Ravenclaw');
        }
        else{
            house.push('Slytherin');
        }
    }
    return house;
}