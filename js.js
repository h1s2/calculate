const txt = document.getElementById('txt');

const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const equal = document.getElementById('equal');

const dot = document.getElementById('dot');
const clear = document.getElementById('clear');

let num1 = '';
let num2 = '';
let sign = '';

zero.addEventListener('click', () => {
  num2 += '0';
  txt.value = num1 + sign + num2;
})
one.addEventListener('click', () => {
  num2 += '1';
  txt.value = num1 + sign + num2;
})
two.addEventListener('click', () => {
  num2 += '2';
  txt.value = num1 + sign + num2;
})
three.addEventListener('click', () => {
  num2 += '3';
  txt.value = num1 + sign + num2;
})
four.addEventListener('click', () => {
  num2 += '4';
  txt.value = num1 + sign + num2;
})
five.addEventListener('click', () => {
  num2 += '5';
  txt.value = num1 + sign + num2;
})
six.addEventListener('click', () => {
  num2 += '6';
  txt.value = num1 + sign + num2;
})
seven.addEventListener('click', () => {
  num2 += '7';
  txt.value = num1 + sign + num2;
})
eight.addEventListener('click', () => {
  num2 += '8';
  txt.value = num1 + sign + num2;
})
nine.addEventListener('click', () => {
  num2 += '9';
  txt.value = num1 + sign + num2;
})

plus.addEventListener('click', () => {
  if (sign && num2) {
    calculate();
  } else if (!sign) {
    num1 = num2;
    num2 = '';
  }

  if (txt.value !== '') {
    sign = '+';
  }
  
  txt.value = num1 + sign + num2;
  console.log(Number(num1), Number(num2));
})
minus.addEventListener('click', () => {
  if (sign && num2) {
    calculate();
  } else if (!sign) {
    num1 = num2;
    num2 = '';
  }

  if (txt.value !== '') {
    sign = '-';
  }
  
  txt.value = num1 + sign + num2;
})
multiply.addEventListener('click', () => {
  if (sign && num2) {
    calculate();
  } else if (!sign) {
    num1 = num2;
    num2 = '';
  }

  if (txt.value !== '') {
    sign = '×';
  }
  
  txt.value = num1 + sign + num2;
})
equal.addEventListener('click', () => {
  if (num1) {
    calculate();
    num2 = num1;
    num1 = '';

    txt.value = num1 + sign + num2;
  }
})

dot.addEventListener('click', () => {
  if (num2 !== '' && !num2.includes('.')) {
    num2 += '.';
  }
  txt.value = num1 + sign + num2;
})
clear.addEventListener('click', () => {
  num1 = '';
  num2 = '';
  sign = '';
  txt.value = '';
})


function calculate() {
  if (sign === '+') {
    num1 = (Number(num1) + Number(num2)).toFixed(15);
    num1 = Number(num1);
    
    num2 = '';
    sign = '';

  } else if (sign === '-') {
    num1 = (Number(num1) - Number(num2)).toFixed(15);
    num1 = Number(num1);
    
    num2 = '';
    sign = '';

  } else if (sign === '×') {
    if (num2) {
      num1 = (Number(num1) * Number(num2)).toFixed(15);
      num1 = Number(num1);
    }
    
    num2 = '';
    sign = '';

  }
}