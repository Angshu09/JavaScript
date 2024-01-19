const arr = ["ironman", "thor", "captain", "spiderMan"];



for(let i=0; i<arr.length; i++){
    console.log(arr[i] + " ");
}



let count = 0;
while(count < arr.length){
    console.log(`The array values are ${arr[count]} `);
    count++; 
}



let no = 11;
do{
    console.log(no);
}while(no<=10);