class user{
    constructor (email, pass){
        this.email = email;
        this.pass = pass;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(mail){
        this._email = mail;
    }

    get pass(){
        return `${this._pass}he87eiu`;
    }

    set pass(value){
        this._pass = value;
    }
}

const person1 = new user("a.angshu@ai", 235);
console.log(person1.email);
console.log(person1.pass);