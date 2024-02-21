function parent(){
    let name = "abcd";

    function child1(){
        console.log(name);
    }

    return child1;
}

const user1 = parent();
user1();