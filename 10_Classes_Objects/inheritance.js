class user{
    constructor (userName){
        this.userName = userName;
    }

    printMe(){
        console.log(this.userName);
    }
}

class teacher extends user{
    constructor(userName, email, pass){
        super(userName);
        this.email = email;
        this.pass = pass;
    }

    details(){
        console.log(`${this.userName} , ${this.email} , ${this.pass}`);
    }
}

const person1 = new user("Angshu");
person1.printMe(); // Angshu

const person2 = new teacher("xyz", "xyz.mail.com", 456);
person2.details(); // xyz , xyz.mail.com , 456
person2.printMe(); // xyz
