//  Immediately Invoked Function Expression (IIFE)


//global scope ke polution se bachne ke liye iife ka use karte h

//named IIFE
(function chai(){
    console.log((`DB Connected`))
})();

//unnamed IIFE
((name) => {
    console.log((`DB Connected Two ${name}`));
})('hritik');