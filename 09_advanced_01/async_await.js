// async function getData(){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log("Successful");
//             resolve();
//         }, 4000);
//     })
// }

async function getData(){
    const x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await x.json();
    return data;
}

async function main(){
    console.log("processing");

    let data = await getData();
    console.log(data);

    console.log("task 2");

    console.log("Running");
}

main();