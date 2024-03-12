function setUserName(name){
    this.name = name;
}

function createUser(name, place, college){
    setUserName.call(this, name);
    this.place = place;
    this.college = college;

}

const user1 = new createUser('xyz', 'abc', 'kmn');
console.log(user1);