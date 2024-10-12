// for each loop

// const coding = ['js','cpp','java','python','ruby'];

// coding.forEach((element, index, array) => {
//     console.log(element, index, array);
// });


const arr = [
    {
        languageName:'javascript',
        languageFileName: 'js'
    },

    {
        languageName:'Java',
        languageFileName: 'java'
    },

    {
        languageName:'python',
        languageFileName: 'py'
    }];


    arr.forEach( (item) => {
        console.log(item.languageName);
    });