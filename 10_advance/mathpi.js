//why we can't math.pi value


// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);




//how we change the vlaue in obj

const chai = {
    name:'ginger chai',
    price: 250,
    isAvailable: true,


    orderChai: function(){
        console.log("chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
     //writable: false,
       enumerable: true
 })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}

