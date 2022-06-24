// let val;

// val = window.innerHeight;
// val = window.innerWidth;

// //scroll points
// val = window.scrollY;
// val = window.scrollX;

// //location
// val = window.location;
// val = window.location.hostname;
// val = window.location.host;
// // window.location.href = "https://google.com";
// val = window.history.length;
// val = window.navigator.language;
// val = window.document.head;
// val = window.document.links;
// val = window.document.all.length;


// console.log(val);

//Selecting single elements 
// const firstParagraph = document.getElementById('first');
// const border = document.querySelector('.border1')

// border.style.width = '100px';
// border.style.height = '2px';
// border.style.background = 'black';
// border.style.position


// firstParagraph.style.background = "black";
// firstParagraph.style.padding = "5px";
// firstParagraph.innerText = "I CAN CHANGE YOU";
// firstParagraph.innerHTML = '<span style="color: yellow; " >Task List</span>';

// const lists = document.querySelectorAll('.list');
// const listOdd = document.querySelectorAll('.list:nth-child(odd)');
// const listEven = document.querySelectorAll('.list:nth-child(even)');

// console.log(lists);

// // lists[0].style.color = 'red';
// // lists[1].style.background = '#000000';

// listOdd.forEach(function (lists, index) {
//     lists.style.background = 'yellow';
// })

// listEven.forEach(function (lists, index) {
//     lists.style.background = 'gray';
// })


//Creating Element
// const li = document.createElement('li');
// const ul = document.querySelector('ul')

// li.className = 'list';

// li.appendChild(document.createTextNode('Clean House'));

// ul.appendChild(li);

// console.log(li);

//Replacing Positions

const newHeading = document.createElement('h1');
const oldHeading = document.querySelector('h1');
const intro = document.querySelector('.intro');

newHeading.appendChild(document.createTextNode(''))

intro.replaceChild(newHeading, oldHeading)