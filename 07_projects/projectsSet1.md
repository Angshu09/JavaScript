# Projects related to DOM

## Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-cdecjr?file=index.html)

# Solution Codes

## Project 1

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