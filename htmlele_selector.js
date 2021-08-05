console.log("selector");

// element selector 
// 1. single element selector
// 2. multiple element selector 

let element1 = document.getElementById("first");
// console.log(element1);
let element2 = document.getElementById("second");
// element2 = element2.className;
// element2 = element2.childNodes;
// element2 = element2.parentNode;
// element2.style.backgroundColor = "red";
// element2.innerText = "SRS";
// element2.innerHTML = "<b>Smit</b>";
// console.log(element2.innerHTML);
// console.log(element2.innerText);
// console.log(element2);

// query selector

// # - id
// . - class

// let sel = document.querySelector('#first');
// sel = document.querySelector('.child');
// sel = document.querySelector('div');
// sel.style.color = 'red';
// console.log(sel);

// 2. multi  selector

let ele = document.getElementsByClassName('child');
ele = document.getElementsByClassName('container');
console.log(ele[1]);
// console.log(ele[0].getElementsByClassName('child'));
ele = document.getElementsByTagName('div');

for (let index = 0; index < ele.length; index++) {
    const element = ele[index];
    // console.log(element);
    element.style.color = 'blue';
    
}



// html iterative using for each
// Array.from(ele).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue'; 
// })
// console.log(ele);

