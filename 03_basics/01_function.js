function name(){
    console.log("hritik");
}

name();

// function addTwoNumbers(number1,number2){
//    console.log(number1 * number2);
// }

function addTwoNumbers(number1,number2){
    //    const result = number1 + number2;
       return number1 + number2;
    }


// addTwoNumbers(2,3);
const result = addTwoNumbers(2,3);
console.log(result);



function calculateCartPrice(...num1){
    return num1;
}
console.log(calculateCartPrice(200,300,400));


const arr = [1,2,3,4,5,6];
function returnSecondvalue(getArray){
    return getArray[2];
}

// console.log(returnSecondvalue(arr));
// console.log(returnSecondvalue([1,2,300,4,5]));


const obj = {
    name: "hritik",
    age: 22
}

function accessvalue(anyObject){
    // return anyObject[2];
    console.log(`Username is ${anyObject.name} and price is ${anyObject.age}`)
}
// console.log(accessvalue(obj));

accessvalue(obj);