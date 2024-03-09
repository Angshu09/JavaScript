import fs from 'fs/promises'

const a = await fs.readFile('angshu.txt')
console.log(a.toString());
//If we don't use buffer then -> <Buffer 68 65 79 21 20 74 68 69 73 20 69 73 20 61 6e 67 73 68 75 49 20 61 6d 20 61 20 42 43 41 20 73 74 75 64 65 6e 74>
//If we use toString() -> hey! this is angshuI am a BCA student

const b = await fs.writeFile('angshu2.txt', 'this is angshu.txt2');
console.log(b);

fs.writeFile('angshu3.txt', 'this is angshu.txt', (error, data) => {
    console.log(error, data.toString());
})