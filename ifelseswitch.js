const age = 18;
if (age!=29) {
    console.log('age is 19');
} 
if(age == 54){
console.log('age is 54');
}
else if(age === 65)
 {
    console.log('age is 65');
}
else{
    console.log('age more than 60');
}

// == means just compare the condition value
// === means it compare it in both vslue and type format
//!=
//!==

// to check vari is defined or not
if (typeof vari !== 'undefined')
{
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}

// for boolean
const doesdrive = false;
if (doesdrive) {
    console.log("you can drive");
} else {
    console.log("you cannot deive");
}

//  and && = both the condition is true
//  or || = one of the condition is true means true

// terneary operator

console.log( age==45? 'age is 45' : 'age is not 45');

// switches case
let ages = 23;
switch (ages) {
    case 20:
        console.log('age is 18+');
        break;
    case 21:
        console.log('age is 21+');
        break;

    default:
        console.log('age is unknown');
        break;
}


