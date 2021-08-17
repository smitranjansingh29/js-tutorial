console.log('more about events');

let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);


function func1(e) {
    // console.log('thanks',e);
    e.preventDefault();
}

function func2(e){
    // console.log('thanks its a double click',e);
    e.preventDefault();
}

function func3(e){
    // console.log('thanks its a mouse down click',e);
    e.preventDefault();
}

document.querySelector('.no1').addEventListener
('mouseenter', function(){
    // console.log('you entered no');

}
)

document.querySelector('.no2').addEventListener
('mouseleave', function(){
    // console.log('you leave no');

}
)

document.querySelector('.container').addEventListener
('mousemove', function(e){
    // document.body.style.backgroundColor = 'red';
    // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetX},${e.offsetY})`;
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},145)`;
    // console.log('you triggered no');

}
)


