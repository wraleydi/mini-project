const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.hasAttribute('data-number')) {
            handleNumber(button.innerText);
        } else if (button.hasAttribute('data-operator')) {
            handleOperator(button.innerText);
        } else if (button.hasAttribute('data-equals')) {
            calculate();
        } else if (button.hasAttribute('data-clear')) {
            clear();
        }
    });
});

function handleNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        display.innerText = currentInput;
    }
}

function handleOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operator = '';
    previousInput = '';
    display.innerText = result.toString().slice(0, 10);
}

function clear() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
}

