function updateData(username, logInCount, isLoggedIn){
    this.username = username;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;

    return this; //if I don't return this then It will automatically return this because this is a implicit behaviour
}

const a = new updateData("Angshu", 8, true); //every time when we use new keyword then it will create a new object/instance for that specific implimentation 
const b = new updateData("rittu", 9, false);

console.log(a);