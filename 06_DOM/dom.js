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