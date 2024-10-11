// scope



//global scope
let a = 10;
{
    console.log(a);
}
console.log(a);



//block scope
{
    let a = 3;
    console.log(a);
}


//neted scope

function one(){
    const name = "hritik";

    function two(){
        const website = "youtube";
        console.log(name);
    }

    two();
} 

one();



//hoisting

console.log(addOne(4));

function addOne(add){
    return add + 1;
}



console.log(addTwo(3));
const addTwo = function(num){
    return num + 2;
}