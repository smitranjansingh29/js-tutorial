let marks = [23,54,45,55,41,23,45];
const friuts = ['orange','apple','mango'];
const mixed = ['str',89,[3,5]];

const arr = new Array(23,45,22,'aple',[2,4,3]);
console.log(arr);

console.log(friuts[1]);

console.log(friuts.length);

console.log(Array.isArray(marks));

console.log(Array.isArray(84567));

arr[0] = 'smit';
let arrelemnt = arr[0];
console.log('ELEMENT',arrelemnt);

let value = marks.indexOf(45);
console.log(value);

//mutating or modifying
marks.push(5034);
console.log(marks);

marks.unshift(234);
console.log(marks);

marks.pop();
console.log(marks);

marks.shift();
console.log(marks);

marks.splice(1,2);
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [1,3,54,6,5]
marks = marks.concat(marks2);
console.log(marks);


// OBJECTS

let myobj = {
    'name first': 'harry',
    channel: ' smit ranjan singh',
    isactive : true,
    marks : [45,67,65,85]
};

console.log(myobj);
console.log(myobj.marks);
console.log(myobj['name first'])
