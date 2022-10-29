'use strict'

const operandAElem = document.querySelector('#operandA');
const operandBElem = document.querySelector('#operandB');
const actionElem = document.querySelector('#action');
const buttonElem = document.querySelector('.button');
const resultElem = document.querySelector('#result');

buttonElem.addEventListener('click', onBtnClick)


function onBtnClick () {
    if (!validateValues()) {
        return;
    };
    
    const {a, b, action} = getValues();
    const result = calculateResult(a, b, action);
    showResult(a, b, action, result)
}

function getValues () {
    let a = Number(operandAElem.value);
    let b = Number(operandBElem.value);
    let action = actionElem.value;

    return {a, b, action}
}

function validateValues() {
    if (validateNumber(operandAElem.value) && validateNumber(operandBElem.value)) {
        return true
    }
    return false
};

function validateNumber(value) {
    if (isNaN(value) || value.trim() === '') {
        return false
    }
    return true
}

function calculateResult (a, b, action) {
    switch (action) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

function showResult (a, b, action, result) {
    return resultElem.innerHTML = (`${a} ${action} ${b} = ${result}`)
}