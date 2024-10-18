//lexical
function outer(){
   let username = 'hritik';

   function inner(){
       console.log(username);
   }
   inner();
}

outer();
console.log("TOO OUTER",username);



//closure
function makeFunc(){
    const name = "Hritik";
    function displayName(){
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
console.log(myFunc);