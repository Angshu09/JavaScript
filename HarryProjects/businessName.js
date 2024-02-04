function nameGenerator(){
    let str = "";
    let random = 0;
    random = Math.ceil(Math.random() * 3 );

    if(random == 1){
        str += "Crazy"
    }
    else if(random == 2){
        str += "Fire"
    }
    else{
        str += "Amazing"
    }

    random = Math.ceil(Math.random() * 3 );

    if(random == 1){
        str += " Engine"
    }
    else if(random == 2){
        str += " Food"
    }
    else{
        str += " Garments"
    }

    random = Math.ceil(Math.random() * 3 );

    if(random == 1){
        str += " Bros"
    }
    else if(random == 2){
        str += " Limited"
    }
    else{
        str += " Hub"
    }
        
    return str;
}

console.log(nameGenerator())
