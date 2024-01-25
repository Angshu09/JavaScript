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