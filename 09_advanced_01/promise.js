const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async function 1");
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})

// Upper task is done in 2 parts

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async function 2");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise consumed");
})

//Upper task is done by 1 pary only 

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({Username: "angshu_das_", college: "Makaut"}) //send an object 
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Angshu", id: "dk567"});
        }
        else{
            reject("there is some error!");
        }
    }, 2000);
})

promiseFour.then((user)=> {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(()=> {
    console.log("your promise is either resolved or rejected!")
})



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "JavaScript", id: "JS"});
        }
        else{
            reject("there is some error in jS!");
        }
    }, 2000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async function getAllInfo(){
//     try {
//         const url = await fetch('https://api.github.com/users/Angshu09');
//         const data = await url.json();
//         console.log(data);
//     } 
//     catch (error) {
//         console.log(error);
//     }
   
// }

// getAllInfo();



fetch('https://api.github.com/users/Angshu09')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})