const balance = 1000;

// if(balance > 500){
//     console.log(`your balance is greater than 500`);
// }
// else{
//     console.log(`your balance in not greater than 500`);
// }

// if(balance > 500) console.log(`your balance is greater than 500`); //This is implicit scope

//comparison operators -> ==, ===, >, >=, <, <=, != 
// === this is used to strict checking. Is checks values and also its types

const month = 3;

switch(month){
    case 1:
        console.log("january");
        break;
    
    case 2:
        console.log("february");
        break;

    case 3:
        console.log("march");
        break;

    case 4:
        console.log("april");
        break;

    default:
        console.log("default value matched");  
}