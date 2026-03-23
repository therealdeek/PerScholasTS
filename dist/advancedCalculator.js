function add(a = 0, b = 0) {
    return a + b;
}
function sub(a = 0, b = 0) {
    return a - b;
}
function mul(a = 0, b = 0) {
    return a * b;
}
function div(a = 0, b = 0) {
    return b === 0 ? null : a / b;
}
function calculate(input) {
    if (typeof input === "number") {
        return input ** 2;
    }
    else {
        return input.reduce((acc, val) => acc + val, 0);
    }
}
export {};
//# sourceMappingURL=advancedCalculator.js.map