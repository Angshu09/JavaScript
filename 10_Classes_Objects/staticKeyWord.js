class user{
    constructor(userName){
        this.userName = userName;
    }

    logMe(){
        console.log(this.userName);
    }

    static createId(){
        return 123;
    }
}

const person1 = new user("Angshu");
person1.logMe();
// person1.createId(); //Error

class teacher extends user{
    constructor(userName, email, pass){
        super(userName);
        this.email = email;
        this.pass = pass;
    }

    courseName(name){
        console.log(`${name} is made by ${this.userName}`)
    }
}

const person2 = new teacher("xyz", "xyz.mail.com", 567);
person2.courseName("JS");
// person2.createId(); //Error

