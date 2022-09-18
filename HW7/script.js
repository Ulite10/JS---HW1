'use strict'

const calc = createCalculator(10);

function createCalculator(a) {
    let result = a;
    return {
        sum: (b) => result += b,
        mult: (b) => result *= b,
        sub: (b) => result -= b,
        div: (b) => result /= b,
        set: (b) => result = b,
    };
}

// calc.sum(5); /// 15
// calc.mult(10); // 150
// calc.sub(40); // 110
// calc.div(10); // 11
// calc.set(100); //