# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-cdecjr?file=index.html)

# Solution Codes

## Project 1 solution

```Javascript

const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (e){
  e.addEventListener('click', function(ele){
    if(ele.target.id === 'grey'){
      body.style.backgroundColor = ele.target.id;
    }
    if(ele.target.id === 'white'){
      body.style.backgroundColor = ele.target.id;
    }
    if(ele.target.id === 'blue'){
      body.style.backgroundColor = ele.target.id;
    }
    if(ele.target.id === 'yellow'){
      body.style.backgroundColor = ele.target.id;
    }
  })
})

```



## Project 2 solution

```Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector('#results');

  if(height === '' || height <= 0 || isNaN(height)){
    result.innerHTML = "<p>Please give a valid height!</p>"
  }else if(weight === '' || weight <= 0 || isNaN(weight)){
    result.innerHTML = "Please give a valid weight!"
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(bmi < 18.6){
      result.innerHTML = `<span>${bmi}, Under Weight = Less than 18.6</span>`;
    }
    else if(bmi >= 18.6 && bmi<=24.9){
      result.innerHTML = `<span>${bmi}, Normal Range = 18.6 and 24.9</span>`;
    }
    else{
      result.innerHTML = `<span>${bmi}, Overweight = Greater than 24.9</span>`;
    }
  }
})

```

## Project 3 solution

```Javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);

```


## Project 4 solution

```Javascript

const randomNumber = parseInt(Math.random() * 100 + 1) ;
const input =  document.querySelector('#guessField');
const submit =  document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];
let noOfGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess > 100){
    alert('Plese enter a number that is less than 100');
  }
  else if(guess < 1){
    alert('Please enter a number that is greater than equal to 1');
  }
  else{
    prevGuess.push(guess);
    if(noOfGuess > 10){
      displayGuess(guess);
      displayMessage(`Game over. Random no was ${randomNumber}`);
      endGame();
    }
  }
}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMessage(message){

}

function newGame(){

}

function endGame(){

}
```