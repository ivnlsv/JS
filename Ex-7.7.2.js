function calculate(a, b, operator) {
    if (operator === "+") {
        return a + b; 
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "-") {
        return a - b;
    } else if (operator === "*") {
        return a * b;
    } else if (operator === "/") {
        return a / b;
    }
}
let args = [2, 3, "+"];
let result = calculate.apply(null, args) 
console.log (result);