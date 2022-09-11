'use strict'


const action = getAction();
const operands = getOperands();
const result = getResult(operands, action);
showResult(result);

function getAction() {
    let action = prompt('Action');
    while (isActionInvalid(action)) {
        action = prompt('Action again')
    }
    return action;
}

function isActionInvalid(action) {
    return action !== '+' && action !== '-' && action !== '*' && action !== '/'
}

function getOperands() {
    let val = prompt('Please enter operands');
    while (areOperandsInvalid(val)) {
        val = prompt("Please enter operands again")
    }
    return val.split(',').map(Number);
}

function areOperandsInvalid(val) {
    return val === null || val.trim() === '';
}

function getResult(operands, action) {
    let result = operands[0];
    let expression = operands.join(` ${action} `);
    for (let i = 1; i < operands.length; i++) {
        result = calculate(result, operands[i], action);
    }
    return `${expression} = ${result}`;
}

function calculate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

function showResult(result) {
    alert(result)
}
