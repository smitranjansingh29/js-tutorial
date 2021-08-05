console.log('smit ranjan signh');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);
// console.log(cont.childNodes.length);
// console.log(cont.children.length);

let nodeName = cont.childNodes[0].nodeName;
// console.log(nodeName);

let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeType);

// node type 
// 1. element
// 2. attributes
// 3. text node
// 8. comment
// 9. document 
// 10. doctype

let container = document.querySelector('div.container');
// console.log(container.children);

// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.lastChild);
// console.log(container.firstElementChild);
// console.log(container.lastElementChild);

// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling);

