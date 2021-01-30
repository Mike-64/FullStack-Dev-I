var add = function (a, b) {
    console.log("Adding two numbers %s and %s", a, b);
    var sum = a + b;
    console.log("The sum is %i", sum);
};

var subtract = function (a, b) {
    console.log("Subtracting two numbers %s and %s", a, b);
    var difference = a - b;
    console.log("The difference is %i", difference);
};

var multiply = function (a, b) {
    console.log("Multiplying two numbers %s and %s", a, b);
    var result = a * b;
    console.log("The result is %i", result);
};

var divide = function (a, b) {
    console.log("Dividing two numbers %s and %s", a, b);
    var result = a / b;
    console.log("The result is %i", result);
};

var operation = window.prompt("Enter the Math Operator that should execute?");

var num1 = window.prompt("Enter the first number");
var num2 = window.prompt("Enter the second number");

if (!isNaN(num1) && !isNaN(num2)) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch (operation) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            console.log("Please Choose a valid operation +,-,*,/");
    }
} else {
    console.log("Enter only valid numbers for the inputs");
}
