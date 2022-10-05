'use strict'

function Calculator(a) {
    this.result = a;

    this.add = function (b) {
        this.result += b;
    };

    this.mult = function (b) {
        this.result *= b;
    }

    this.sub = function (b) {
        this.result -= b;
    }

    this.div = function (b) {
        this.result /= b;
    }

    this.set = function (b) {
        this.result = b;
    }

}

const calc = new Calculator(100);
console.log(calc.result) // 100
calc.add(10); // 110
console.log(calc.result) // 110
calc.div(10); // 110 / 10 = 11
calc.mult(5); // 55
calc.sub(100); // -45
calc.set(50); // 50
calc.add(10); // 60
console.log(calc.result) // 60
