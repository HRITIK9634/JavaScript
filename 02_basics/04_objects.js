// declaration of singelton object

const username = new Object();
console.log(username);



//add value in object

const data = {}

data.name = "hritiksaini";
data.age = 22;
data.marks = 99;
data.course = "Bca";
data.isLoggedIn = true;

console.log(data);



//Nesting in object
const regularUser = {
    email: "hritik@gmail.com",
    fullName:{
        userFullName:{
            firstName: "hritik",
            secondName:"saini"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName.firstName);


//Merge object
const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

//const obj3 = {obj1, obj2}
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const user = [
    {
        id: 1,
        email: "hriti@gmail.com"
    },
    {

    },
    {

    },
    {

    },
    {

    },
]

user[1].email
console.log(user);

// console.log(Object.keys(data));
// console.log(Object.values(data));
// console.log(Object.entries(data));


// console.log(data.hasOwnProperty('isLoggedIn'));




//Destructuring

const course = {
    coursename: "javascript",
    price: 333,
    courseInstructor: "hritik"
}

// console.log(course.price);

const {coursename : name} = course
console.log(name);