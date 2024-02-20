class user {
    constructor(userName, email, pass){
        this.userName = userName;
        this.email = email;
        this.pass = pass;
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`;
    }

    setEncryption(){
        return `${this.pass}abcdef`;
    }
}

const user1 = new user("Angshu", "angshu@mail.com", 456);
console.log(user1.changeUserName());
console.log(user1.setEncryption());
console.log(user1);

//Behind The Scenes --->

function User(userName, email, pass){
    this.userName = userName;
    this.email = email;
    this.pass = pass;
}

User.prototype.changeUserName = function(){
    return  `${this.userName.toUpperCase()}`;
}

User.prototype.setEncryption = function(){
    return `${this.pass}d76r4hd`;
}

const user2 = new User("x-men", "chai.gamail.com", 87489);
console.log(user2.changeUserName())
console.log(user2.setEncryption());
console.log(user2);