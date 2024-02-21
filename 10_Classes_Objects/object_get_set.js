const user = {
    _email: "angshu@gmail.com",
    _pass: 987,

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(user);
console.log(tea.email);