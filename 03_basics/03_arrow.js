//this refer current context 

const user = {
    username: "hritik",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sumit";
// user.welcomeMessage();




// function name(){

//     console.log(this);
// }
// name();


// const chai = function () {
//     let username = "hritik";
//     console.log(this);
// }
// chai();


// const chai = () =>{
//     const name = "hritik";
//     console.log(this)
// }
// chai();


//arrow function


//implicit return
const add = (num1,num2) => {
    return num1 + num2;
}

console.log(add(3,4));


//explicit return
const addtwo = (num1,num2) =>  (num1 + num2);

console.log(addtwo(5,7));




