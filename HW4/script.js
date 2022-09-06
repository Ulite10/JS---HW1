'use strict'


let action = getAction();
let number = getCount();
let result = getResult(number, action);
alert(result);

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

function getCount() {
    let val = prompt('Please enter count');
    while (isCountInvalid(val)) {
        val = prompt("Please enter valid count")
    }
    return +val;
}

function isCountInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 2;
}

function getNumber() {
    let val = prompt('Please enter number');
    while (isNumberInvalid(val)) {
        val = prompt("Please enter valid number")
    }
    return +val;
}

function isNumberInvalid(val) {
    return val === null || val.trim() === '' || isNaN(val) || val <= 0;
}

function getResult(num, action) {
    let result = getNumber();
    let a = result + "";
    for (let i = 2; i <= num; i++) {
        let val = getNumber()
        a += " " + action + " " + val
        if (action === '+') {
            result += val
        } else if (action === '-') {
            result -= val
        } else if (action === '*') {
            result *= val;
        } else if (action === '/') {
            result /= val;
        }
    }
    return `${a} = ${result}`
}