console.log('functions');

// let name = ['smit'];

// function greet(name , thank = ' thank you ') {
//     console.log(`happy birthday ${name} to you ${thank}`);
//     return 1;
// }

// let val = greet(name , 'thanks a lot');
// console.log(val);

// function greeting(name, thank = 'thankyou'){
//     let msg = 'xdcfvgbhnjm ${name} fdbjvdfvdhkfdhv ${thank}';
//     return msg;
// }

// let varo = greeting(name , 'thanks');
// console.log(varo);

// const mygreet = function (name , thank = ' thank you ') {
//     console.log(`happy birthday ${name} to you ${thank}`);
//     return 1;
// }

// let valp = mygreet(name , 'thanks')

// //function in side of object
// const myobj = {
//     name : 'skillf',
//     game : function()
//     {
//         return "gta";
//     }
// }
// console.log(myobj.game());

// arr = ['fruit','vegetable','furtinure'];
// arr.forEach(function(element,index,array)
// {
//     console.log(element,index);
// }
// );


// scope
// let / const has block level scope 
// var has function level scope
if(1){
let i = 234;
console.log(i);
}


function ui(name)
{
     i = 9;
    console.log(i);
    return `this is a ${name} ui`;
}
console.log(ui("smit"),i);

