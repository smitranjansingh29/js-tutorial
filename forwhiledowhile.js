console.log('for and while-dowhile loop');

// types of loop 
// for
// while
// dowhile
// let i;
// for (i = 1; i <= 50; i++) {
//      console.log(i);    
// }


// let j=0;
// while (j<10) {
//     console.log(j);
//     j++;
// }


// let k = 20;
// do {
//     console.log(k);
//     k++;
// } while (k < 10);



// let k1 = 0;
// do {
//     console.log(k1);
//     if (k1 === 5)
//     {
//         break;
//     } 
//     k1++;
// } while (k1<10);
// console.log('done');


// let k2 = 0;
// do {
//     if (k2 === 5)
//     {
//         k2++;
//         continue;
//     }
//     console.log(k2); 
//     k2++;
// } while (k2<10);
// console.log('done');


let arr = [2,4,4,8,5,23,5];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    
}
// arr.forEach(function(element)
// {
//     console.log(element);
// } );

arr.forEach(function(element,index,array)
{
console.log(element,index,array);
});

let obj = {
    name : 'smit ranjan',
    age : 45,
    type : 'programmer',
    os : 'window'
}
for (let key in obj) {
    console.log(`${key} is object of ${obj[key]}`)
}






