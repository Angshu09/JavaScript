const file = require('fs');
// console.log(file);

console.log('Starting');
file.writeFile('angshu.txt', 'hey! this is angshu', ()=>{
    console.log('file written');
   
    file.readFile('angshu.txt', (error, data)=>{
        console.log(error, data.toString()); //null hey! this is angshu //Here we need to use toString() 
    });

})
console.log('End');
// Output- 
// Starting
// End
// file written

file.appendFile('angshu.txt', 'I am a BCA student', (error, data)=>{
    console.log(error, data); //null I am a BCA student
})