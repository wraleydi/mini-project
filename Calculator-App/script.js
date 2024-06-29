const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let inputNow = '';
let inputPrev = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', function(){
        if (button.hasAttribute('data-number')){
            handleNumber(button.innerText);
        } else if (button.hasAttribute('data-operator')){
            handleOperator(button.innerText);
        } else if (button.hasAttribute('data-percent')){
            handlePercent(button.innerText);
        } else if (button.hasAttribute('data-del')){
            del();
        } else if (button.hasAttribute('data-clear')){
            clear();
        } else if (button.hasAttribute('data-result')){
            calculate();
        }
    });
});

function handleNumber(number){
    if (inputNow.length < 15){
        inputNow += number;
        display.innerText = inputNow;
    }
}
