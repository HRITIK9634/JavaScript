//let myName = "hritik    ";


// console.log(myName.length);
//console.log(myName.trim().length);





//let myHeros = ["thor", "spideerman"];

// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }


// Object.prototype.hritik = function(){
//     console.log(`hritik is present in all objects`);
// }



// Array.prototype.heyhritik = function(){
//     console.log(`Hritik says hello`);
// }

// //heroPower.hritik();

// myHeros.hritik();
// myHeros.heyhritik();
// // heroPower.heyhritik();


// //inheritnace


// const user = {
//     name: "chai",
//     email: "chai@gmail.com"
// }

// const teacher = {
//     makeVedio: true
// }

// const teachingSupport = {
//     isAvailable: false
// }

// const taSupport = {
//     makesAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__:teachingSupport
// }


// teacher.__proto__ = user;

// //morden syntax

// Object.setPrototypeOf(teachingSupport, teacher);

//in this example we print length for all string

let anotherUserName = "chaiAurCode    ";

String.prototype.trueLength = function(){
    console.log(`${this}`)
    //console.log(`${this.name}`);
    console.log(`true lenght is: ${this.trim().length}`);
}

anotherUserName.trueLength();

"hritik".trueLength()
"iceTea".trueLength()