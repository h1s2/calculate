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
const division = document.getElementById('division');
const equal = document.getElementById('equal');

const dot = document.getElementById('dot');
const clear = document.getElementById('clear');

zero.addEventListener('click', () => {
  txt.value += '0';
})
one.addEventListener('click', () => {
  txt.value += '1';
})
two.addEventListener('click', () => {
  txt.value += '2';
})
three.addEventListener('click', () => {
  txt.value += '3';
})
four.addEventListener('click', () => {
  txt.value += '4';
})
five.addEventListener('click', () => {
  txt.value += '5';
})
six.addEventListener('click', () => {
  txt.value += '6';
})
seven.addEventListener('click', () => {
  txt.value += '7';
})
eight.addEventListener('click', () => {
  txt.value += '8';
})
nine.addEventListener('click', () => {
  txt.value += '9';
})


plus.addEventListener('click', () => {
  appendOperator('+');
})
minus.addEventListener('click', () => {
  appendOperator('-');
})
multiply.addEventListener('click', () => {
  appendOperator('×');
})
division.addEventListener('click', () => {
  appendOperator('÷');
})


equal.addEventListener('click', () => {
  if(lastCharOperator()) return;

  while(/\d+[×÷]\d+/.test(txt.value)) {
    txt.value = txt.value.replace(/(\-?\d+\.?\d*)([×÷])(\d+\.?\d*)/g, (match, a, operator, b) => {

      let calculate = 0;
      a = Number(a);
      b = Number(b);

      if(operator === '×') {
        calculate = a * b;
      } else if(operator === '÷') {
        calculate = a / b;
      }

      calculate = Number(calculate.toFixed(10));

      console.log(match);

      return String(calculate);
    });
  }

  while(/\d+[\+\-]\d+/.test(txt.value)) {
    txt.value = txt.value.replace(/(\-?\d+\.?\d*)([\+\-])(\d+\.?\d*)/g, (match, a, operator, b) => {

      let calculate = 0;
      a = Number(a);
      b = Number(b);

      console.log(match);

      if(operator === '+') {
        calculate = a + b;
      } else if(operator === '-') {
        calculate = a - b;
      }

      calculate = Number(calculate.toFixed(10));

      console.log(match);

      return String(calculate);
    });
  }
})
dot.addEventListener('click', () => {
  if(/[\+\-×÷][0-9]*\.[0-9]*?$/.test(txt.value) || /[0-9]*\.[0-9]*?$/.test(txt.value)) {
    return;
  } else if(!/\d$/.test(txt.value)) {
    txt.value += '0';
  }

  txt.value += '.';
})
clear.addEventListener('click', () => {
  txt.value = '';
})

function lastCharOperator() {
  return /[\+\-×÷]$/.test(txt.value)
}
function lastCharDot() {
  return /\.$/.test(txt.value)
}
function appendOperator(op) {
  if(lastCharOperator()) return;

  if(lastCharDot()) {
    txt.value = txt.value.slice(0, -1);
  }

  txt.value += op;
}
