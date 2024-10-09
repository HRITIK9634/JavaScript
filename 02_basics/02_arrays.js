const marvel_heros = ["Ironman","Captainamerica","Thor"];
const dc_heros = ["Superman","Batman","Aquaman"];


//concat

let heros = marvel_heros.concat(dc_heros);
console.log(heros);


//Spread

const allHeros = [...marvel_heros, ...dc_heros];
console.log(allHeros);

//flat

const newarr1 = [1,2,3,[4,5,6],[7,8,[1,2,3]]];
const newarr2 = newarr1.flat(Infinity);
console.log(newarr2);



console.log(Array.isArray("hritik"));  //check is it or not 


console.log(Array.from("hritik")); //convert into array



console.log(Array.from({name: "hritik"}));   //important


const num1 = 10;
const num2 = 20;
const num3 = 20;

console.log(Array.of(num1, num2, num3));