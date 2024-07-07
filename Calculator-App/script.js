const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let inputNow = '';
let inputPrev = '';
let operator = '';
let result = 0;
let isResultShown = false;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (button.hasAttribute('data-number')) {
            handleNumber(button.innerText);
        } else if (button.hasAttribute('data-operator')) {
            handleOperator(button.innerText);
        } else if (button.hasAttribute('data-percent')) {
            handlePercent();
        } else if (button.hasAttribute('data-del')) {
            del();
        } else if (button.hasAttribute('data-clear')) {
            clear();
        } else if (button.hasAttribute('data-koma')) {
            koma();
        } else if (button.hasAttribute('data-result')) {
            handleEqual();
        }
    });
});

function handleNumber(number) {
    if (isResultShown) {
        // Jika hasil sudah ditampilkan, mulai hitungan baru
        clear();
        isResultShown = false;
    }
    if (inputNow.length < 15) {
        inputNow += number;
        display.innerText = inputNow;
    }
}

function handlePercent() {
    if (!inputNow) return;
    inputNow = (parseFloat(inputNow) / 100).toString();
    display.innerText = inputNow + '%';
}

function del() {
    inputNow = inputNow.slice(0, -1);
    if (inputNow === "") {
        display.innerText = '0';
    } else {
        display.innerText = inputNow;
    }
}

function clear() {
    inputNow = '';
    inputPrev = '';
    operator = '';
    result = 0;
    display.innerText = '0';
    isResultShown = false;
}

