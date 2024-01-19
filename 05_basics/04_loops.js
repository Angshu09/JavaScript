const arr = ["JS", "Java", "Ruby", "C++", "Swift" ];

// arr.forEach( function (value) {
//     console.log(value);
// } )


// arr.forEach( (value) => {
//     console.log(value);
// } )


// function printMe (value){
//     console.log(value);
// }
// arr.forEach(printMe);


// arr.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

const coding = [
    {
        language: "JavaScript",
        languageFile: "JS"
    },

    {
        language: "JAVA",
        languageFile: "Java"
    },

    {
        language: "Python",
        languageFile: "Py"
    }
]

coding.forEach((item)=> {
    console.log(item.language);
})
// JavaScript
// JAVA
// Python