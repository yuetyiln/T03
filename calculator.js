"use strict";
// let operator = document.getElementsByClassName
// ('.operator');

// let equal = document.getElementsByClassName
// ('.equal');
// let clear = document.getElementById('clear');
// let decimal = document.getElementById('decimal');

// operator.addEventListener('click',function(e){

// })

function numberOnClick() {
    console.log(this);
    let value = document.getElementById("displayValue");
    let digitPressed = this.innerHTML;
    value.innerHTML = digitPressed;
 }
  document.addEventListener('DOMContentLoaded', function()
 {
   let numberBtns = document.getElementsByClassName('number');

   for( let i=0; i<numberBtns.length; i++ ) {
       numberBtns[i].addEventListener('click', numberOnClick);
   }

//    let currentnumstring = input.innerHTML;
//    let lastChar = currentnumstring[currentnumstring.length - 1];

 });

 function operatorOnClick() {
    console.log(this);
 }
 document.addEventListener('DOMContentLoaded', function()
 {
   let operatBtns = document.getElementsByClassName('operator');

   for( let i=0; i<operatBtns.length; i++ ) {
       operatBtns[i].addEventListener('click', numberOnClick);
   }

});

function operatorOnClick() {
    console.log(this);
 }
 document.addEventListener('DOMContentLoaded', function()
 {
   let equalBtns = document.getElementsByClassName('equal');

   for( let i=0; i<equalBtns.length; i++ ) {
       equalBtns[i].addEventListener('click', numberOnClick);
   }

});

