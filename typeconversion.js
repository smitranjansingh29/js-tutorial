// type conversion and type coercion

let myvar;
myvar = 34;
mystr = String(34);
console.log(myvar , (typeof myvar));
console.log(myvar, (typeof mystr));

let booleanvar = String(true);
console.log(booleanvar , (typeof booleanvar));

let date = String(new Date());
console.log(date , (typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr.length , (typeof arr));

let value = 8;
console.log(value.toString());

// toString  is used to convert to string

let stri = Number("34324");
stri = Number("93f4f");   
stri = Number(true);
stri = Number(false);
stri = Number([1,2,3,4]);
console.log(stri , (typeof stri));

// NaN is "not a number"

let number = parseInt('34');
let numbers = parseFloat('4.444');
console.log(number , (typeof number));
console.log(numbers.toFixed(2) , (typeof numbers));

// tofixed to print the no of decimal time 

// type coercion

let mystri = "698";
let mynum = 34;
console.log(mystri + mynum);

