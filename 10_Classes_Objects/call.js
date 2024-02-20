function setUsername(username){
    this.username = username;
    console.log("called");
}

function createUser(username, gmail, password){
    setUsername.call(this, username);
    this.gmail = gmail;
    this.password = password;
}

const user = new createUser("Angshu", "angshu191@gmail.com", 345);
console.log(user);