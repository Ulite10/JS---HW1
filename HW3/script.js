'use strict'

let operand = getOperand();
findSum(operand)

function getOperand() {
    let val = prompt('Operand?');
    while (isOperandInvalid(val)) {
        val = prompt("Operand again")
    }
    return +val;
}

function isOperandInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}


function findSum(no) {
    let sumEven = 0;
    let sumOdd = 0;
    let i = 1;

    while (i <= no) {
        if (isEven(i)) {
            sumEven += i; 
        }
        else {
            sumOdd += i;
        }
        i++
    }
    showResult(sumEven, sumOdd)
}

function isEven(n) {
    return n % 2 == 0;
}

function showResult(a, b) {
    alert(`Even: ${a} and odd: ${b}`)
}



// function findSumOdd(no) {
//     let sum = 0;
//     let i = 1;
//     while (i <= no) {
//         sum += i;
//         i += 2
//     }
//     return sum;
// }

// function findSumEven(no) {
//     let sum = 0;
//     let i = 0;
//     while (i <= no) {
//         sum += i;
//         i += 2
//     }
//     return sum;
// }