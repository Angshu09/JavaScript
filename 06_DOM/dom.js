// document.getElementById('title')
// <h1 class="heading" id="title">This is the heading tag ofthe web page</h1>


// document.getElementById('title').id
// 'title'


// document.getElementById('title').className
// 'heading'


// document.getElementById('title').getAttribute('id')
// 'title'


// document.getElementById('title').setAttribute('class', 'heading-text')
// it overwrites with the given class value 
// <h1 class="heading-text" id="title">This is the heading tag of the web page</h1>
// document.getElementById('title').setAttribute('class', 'heading-text heading')
// <h1 class="heading-text heading" id="title">This is the heading tag of the web page</h1>


// const title = document.getElementById('title')
// console.log(title)
// <h1 class="heading" id="title">This is the heading tag ofthe web page</h1>


// title.style.backgroundColor = "red" //applies bg color red
// 'red'
// title.style.color = "yellow" //applies color yellow
// 'yellow'
// title.style.borderRadius = "20px" //applies padding 20px
// '20px'


// title.innerHTML //It returns text along with html tags
// 'This is the heading tag of the web page <span style=" display: none;">this is span</span>'

// title.textContent //It returns all the content 
// 'This is the heading tag of the web page this is span'

// title.innerText //It returns only which text that is visible
// 'This is the heading tag of the web page'


// document.getElementByClassName('heading') 
//It actually returns me HTML collection


// document.querySelector('h2') //It actually gives me the first h2 
// <h2>Lorem ipsum dolor sit amet.</h2>

// document.querySelector('#title') 
//  <h1 class="heading" id="title">This is the heading tag of the web page <span style=" display: none;">this is span</span></h1>

//document.querySelector('.heading') 
// <h1 class="heading" id="title">This is the heading tag of the web page <span style=" display: none;">this is span</span></h1>


// const myUl = document.querySelector('ul')
//It selects the ul 

// myUl.querySelector('li').style.backgroundColor = "red"
//it selects the first list item of the ul and turned it's background color to red

// myUl.querySelector('li').style.color = "green"
// It turned the first list item color to green

// myUl.querySelector('li').innerText = "hexa"
// it over write the first list item text one to hexa



// const tempList = document.querySelectorAll('li') //It returns me a node list, It actually not a array but kind of array
// tempList.forEach((nums) => {return nums.style.color = "red"})
//It set all the li color to red
//tempList[0].style.color = 'red';
//By this we can set the first list item color to red



// const myList = document.getElementsByClassName('list-item')
//Here in myList returned HTMl Collection , it does not support forEach loop, if we want to use forEach then we need to convert myList in array


// const myListArr = Array.from(myList);
// here we convert myList in array ans store it in a variable named myListArr


// myListArr.forEach(function (l){
//     l.style.color = 'red';
// })
//It changed all the list item color to red


