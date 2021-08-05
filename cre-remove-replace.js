console.log("create , replace , remove")

let element = document.createElement('li');
element.className = 'thisclass';
element.id = 'created';
element.setAttribute('title','mytitle');

// element.innerText = 'helol created by smit';
// element.innerHTML = "<b>smit ranjan singh</b>";
let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);