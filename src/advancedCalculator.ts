function add (a: number = 0, b: number = 0): number | null{
    return a + b;}

function sub (a: number = 0, b: number = 0): number | null{
    return a - b;}

function mul (a: number = 0, b: number = 0): number | null{
    return a * b;}

function div (a: number = 0, b: number = 0): number | null{
    return b === 0 ? null : a / b;}


function calculate(value: number): number;
function calculate(values: number[]): number;

function calculate(input: number | number[]): number {
    if(typeof input === "number") {
        return input ** 2;
    } else {
        return input.reduce((acc, val) => acc + val, 0);
    }
}