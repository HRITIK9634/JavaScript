

// html code link [digital clock] = href="./3-DigitalClock/index.html"

## project 1 solution

``` javascript

const clock = document.getElementById('clock');
// document.querySelector('#clock')

setInterval( () =>{
let date = new Date();
clock.innerHTML = date.toLocaleTimeString();
},1000 )

```


// html code link [guess number] = href="./4-GuessTheNumber/index.html"

## project 2 solution 

``` javascript

let randomNum = parseInt(Math.random() * 100 + 1);


const submit = document.querySelector('#subt');


const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');


let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid number');
  }
  else if(guess < 1){
    alert('please enter a number more than 1');
}
else if(guess > 100){
  alert('please enter number less than 100');
}
else{
  prevGuess.push(guess);
  if(numGuess === 11){
    displayGuess(guess);
    displayMessage(`Game Over.Random number was ${randomNum}`);
    endGame()
  }
  else{
    displayGuess(guess);
    checkGuess(guess);
  }
}
}
function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`Your guess is right`);
    endGame();
  }
  else if (guess < randomNum){
    displayMessage(`Number is TOOO low`);
  }
  else if(guess > randomNum){
    displayMessage(`Number is TOOO high`)
  }
}


function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}


function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}



function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabledd', '');
  p.classList.add('button');
  p.innerHTML = `<h2  id = "newGame">Star new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}


function newGame(){
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', (e) => {

    randomNum = parseInt(Math.random() *100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

```


## project 6 solution

```javascript

//generate random number

const randomColor = function () {
  const hex = "0123456789ABCD";
  let color  = '#';
  for(let i=0; i<6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;
const startChangingColor = function(){  

  if(!intervalId){
    intervalId = setInterval(changeBgColor,1000);
  }

  function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
  }

}
const stopChangingColor = function(){
clearInterval(intervalId);
intervalId = null;

}


document.querySelector('#start').addEventListener( 'click', startChangingColor )

document.querySelector('#stop').addEventListener( 'click', stopChangingColor);

```