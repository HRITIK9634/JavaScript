//Declaration of string

const firstName = "Hritik";
const secondName = new String('Saini');

console.log(typeof firstName); //string
console.log(typeof secondName); //object

console.log(`My name is ${firstName + secondName}`);


//Method of string

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.charAt(2));  // check index of 2
console.log(firstName.indexOf('t')); //check position of t
console.log(firstName.substring(1,5));

//slice method
console.log(firstName.slice(-2));
console.log(firstName.slice(0,5));
console.log(firstName.slice(2));

//trim method
console.log("     hritik     ");
console.log("  hritik   ".trim());


//replace method
const a = "don";
console.log(a.replace('d', 'g'));


//includes method

const gmail = "hritik087@gmail.com";
console.log(gmail.includes('sumit'));

//split method

console.log(firstName.split('i'));