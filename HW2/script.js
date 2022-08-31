'use strict'

let operandA;
let operandB;
let operator;
let result;

do {
    operandA = prompt('OperandA');
} while (isOperandInvalid(operandA));

do {
    operandB = prompt('OperandB');
} while (isOperandInvalid(operandB));

do {
    operator = prompt('Operator');
} while (isOperatorInvalid(operator));

operandA = +operandA;
operandB = +operandB;

switch (operator) {
    case "+":
    result = operandA + operandB; break;
    case "-":
    result = operandA - operandB; break;
    case "*":
    result = operandA * operandB; break;
    case "/":
    result = operandA / operandB; break
}

alert(`${operandA} ${operator} ${operandB} = ${result}`)


function isOperandInvalid(operand) {
    return operand === null || operand.trim() === '' || isNaN(operand);
}

function isOperatorInvalid(operator) {
    return operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/';
}

