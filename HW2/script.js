'use strict'

let operandA;

do {
    operandA = prompt('OperandA');
} while (isOperandInvalid(operandA));

function isOperandInvalid(operandA) {
    if (isNaN(operandA)) {
        return 'OperandA again';
    }
    return operandA === null || operandA === '';
}

let operandB;

do {
    operandB = prompt('OperandB');
} while (isOperandInvalid(operandB));

function isOperandInvalid(operandB) {
    if (isNaN(operandB)) {
        return 'OperandA again';
    }
    return operandB === null || operandB === '';
}

let operator;

do {
    operator = prompt('Operator');
} while (isOperatorInvalid(operator));

function isOperatorInvalid(operator) {
    return operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/';
}

operandA = +operandA;
operandB = +operandB;


if (operator === "+") {
    const result = operandA + operandB;
    alert(`${operandA} + ${operandB} = ${result}`);
} else if (operator === "-") {
    const result = operandA - operandB;
    alert(`${operandA} - ${operandB} = ${result}`);
} else if (operator === "*") {
    const result = operandA * operandB;
    alert(`${operandA} * ${operandB} = ${result}`);
} else if (operator === "/") {
    const result = operandA / operandB;
    alert(`${operandA} * ${operandB} = ${result}`);
}




// const resultPlus = operandA + operandB;
// const resultMinus = operandA - operandB;
// const resultMultiply = operandA * operandB;
// const resultDivide = operandA / operandB;

// if (operator === '+') {
//     alert(`${operandA} + ${operandB} = ${resultPlus}`);
// } else if (operator === '-') {
//     alert(`${operandA} - ${operandB} = ${resultMinus}`);
// } else if (operator === '*') {
//     alert(`${operandA} * ${operandB} = ${resultMultiply}`);
// } else if (operator === '/') {
//     alert(`${operandA} / ${operandB} = ${resultDivide}`);
// }
