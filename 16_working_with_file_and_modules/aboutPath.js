import path from 'path';

let mypath = 'C:\\Users\\angsh\\OneDrive\\Documents\\GitHub\\JavaScript\\16_working_with_file_and_modules>\\angshu.txt'
console.log(path.extname(mypath)); //.txt
console.log(path.basename(mypath)); //angshu.txt
console.log(path.dirname(mypath)); //C:\Users\angsh\OneDrive\Documents\GitHub\JavaScript\16_working_with_file_and_modules>
console.log(path.join('C:/', 'programs\\angshu.txt')) //C:\programs\angshu.txt //It identify automatically the wrong slashes