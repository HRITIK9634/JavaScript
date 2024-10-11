// const useremail = "hritik@gmail.com";
// if(useremail){
//     console.log("got user email");
// }
// console.log("dont'n have user email");


// falsy value

//false, 0 , -0, BigInt 0n, "", null, undefine, NaN

//truthy value
// "0", "false", " ", [], {}, function(){}


// detecte object

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//detect array

const arr = [];
if(arr.length === 0){
    console.log("array is empty");
}