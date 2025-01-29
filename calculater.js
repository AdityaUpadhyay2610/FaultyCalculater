const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sum(a, b) {
    if (Math.random()*10 < 2) { // 20% chance to return a faulty result
        return a - b; // Faulty result
    }
    return a + b; // Correct result
}

function mul(a, b) {
    if (Math.random()*10 < 2) { // 20% chance to return a faulty result
        return a / b; // Faulty result
    }
    return a * b; // Correct result
}


function div(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    if (Math.random()*10 < 2) { // 20% chance to return a faulty result
        return a + b; // Faulty result
    }
    return a / b; // Correct result
}

function sub(a, b) {
    if (Math.random()*10 < 2) { // 20% chance to return a faulty result
        return a / b; // Faulty result
    }
    return a - b; // Correct result
}

r1.question("Enter num1: ", (num1) => {
    r1.question("Enter num2: ", (num2) => {
        r1.question("Enter operator (+, -, *, /): ", (operator) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Invalid input: Please enter valid numbers.");
            } else {
                if (operator === "+") {
                    console.log(sum(num1, num2));
                } else if (operator === "-") {
                    console.log(sub(num1, num2));
                } else if (operator === "*") {
                    console.log(mul(num1, num2));
                } else if (operator === "/") {
                    console.log(div(num1, num2));
                } else {
                    console.log("Invalid operator");
                }
            }
            r1.close();
        });
    });
});
