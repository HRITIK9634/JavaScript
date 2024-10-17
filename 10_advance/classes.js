// ES6

// class user{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai", "chai@gmail.com", '123');

// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());



//behind the scene

function user(username, email,password){
    this.username = username
    this.email = email
    this.password = password
}


user.prototype.encryptedPassword = function(){
    return `${this.password}`
}

user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new user("tea", "tea@gmail.com", "123");

console.log(tea.encryptedPassword());
console.log(tea.changeUsername());