console.log('local and session');
let imparray = ['tamato','potato'];
//add a key - value to local storage
localStorage.setItem('name','smit');
localStorage.setItem('name2','rohan');
localStorage.setItem('sabzi',JSON.stringify(imparray));
// localStorage.clear();  clear the entire localstorage

localStorage.removeItem('name');
let namel = localStorage.getItem('name');
let namel2 = JSON.parse(localStorage.getItem('sabzi'));
console.log(namel);
console.log(namel2);


// session storage

sessionStorage.setItem('sessionname','ssmit');
sessionStorage.setItem('sessionname2','srohan');
sessionStorage.setItem('sessionsabzi',JSON.stringify(imparray));

sessionStorage.clear();