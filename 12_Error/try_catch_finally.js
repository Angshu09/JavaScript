
function main(){
    let a = 4;
    let b = 8;
    try {
        console.log(a+b+x) //I did't define x, it throws an error
        return true;
    } catch (error) {
        console.log("something went wrong");
        return false;
    }
    finally{ //Finally runs after return statement
        console.log('lost connection');
    }
}

main();