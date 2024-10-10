//object literals

const fathername = Symbol("Mahendra");
const user = {
    name:"Hritik",
    "fullname":"Hritik Saini",
    [fathername]: "Mahendra saini",
    age:22,
    location: "Meerut",
    email: "hritiksaini@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday","Wednesday"]
}

//how to access value
console.log(user.name);
console.log(user["fullname"]);
console.log(user[fathername]);  //use only for special casese like symbol



//update value
user.email = "sumit@gmail.com";
console.log(user);
Object.freeze(user);
user.email = "shilpi@gmail.com";
console.log(user);


//create function in object
user.greeting = function(){
    console.log("hello user");
}

user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}
console.log(user.greeting());
console.log(user.greetingTwo());