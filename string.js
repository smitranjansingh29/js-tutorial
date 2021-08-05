const name = 'smit';
const greet = ' good morning ';
console.log(greet + name);

let html;
html = 'h1 for heading ' + 'p For paragraph';
html = html.concat(' this', ' str');
console.log(html);

console.log(html.length);

console.log(html.toLowerCase());

console.log(html.toUpperCase());

console.log(html[0]);

console.log(html[1]);

console.log(html.indexOf('r'));

console.log(html.indexOf('dff'));

console.log(html.lastIndexOf('g'));

console.log(html.charAt(5));

console.log(html.endsWith('str'));

console.log(html.includes('this'));

console.log(html.includes(' '));

console.log(html.substring(0,4));

console.log(html.slice(-5));

console.log(html.slice(0,6));

console.log(html.split(' '));

console.log(html.split('i'));

console.log(html.replace('this','them'));


let fruits1 = 'orange';
let fruits2 = 'apple' 
let myhtml = `hello ${name}
<h1>this is heading</h1>
<p>you like ${fruits1} and ${fruits2}</p>
`;
document.body.innerHTML = myhtml;