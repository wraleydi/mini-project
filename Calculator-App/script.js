const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let expression = '';

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
            calculate();
        }
    });
});

function handleNumber(number) {
    expression += number;
    display.innerText = expression;
}

function handleOperator(op) {
    if (expression !== '') {
        // Ganti '*' dengan 'x' pada tampilan
        if (op === '*') {
            op = 'x';
        }
        expression += op;
        display.innerText = expression;
    }
}

function handlePercent() {
    if (expression !== '') {
        // Contoh implementasi untuk persentase
        let result = eval(expression.replace(/x/g, '*')) / 100;
        display.innerText = result.toString();
        expression = result.toString(); // Simpan hasil sebagai ekspresi baru
    }
}

function del() {
    expression = expression.slice(0, -1);
    if (expression === '') {
        display.innerText = '0';
    } else {
        display.innerText = expression;
    }
}

function clear() {
    expression = '';
    display.innerText = '0';
}

function koma() {
    if (!expression.includes('.')) {
        expression += '.';
        display.innerText = expression;
    }
}

function calculate() {
    if (expression !== '') {
        // Ganti 'x' dengan '*' saat dievaluasi
        let result = eval(expression.replace(/x/g, '*'));
        display.innerText = result.toString();
        expression = result.toString(); // Simpan hasil sebagai ekspresi baru
    }
}
