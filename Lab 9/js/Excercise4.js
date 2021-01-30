function addNumbers(a, b) {
    console.log("Adding two numbers %s and %s", a, b);
    var sum = parseInt(a) + parseInt(b);
    console.log("The sum is %i", sum);
}

function subtractNumbers(a, b) {
    console.log("Subtracting two numbers %s and %s", a, b);
    var sum = parseInt(a) - parseInt(b);
    console.log("The difference is %i", sum < 0 ? sum * -1 : sum);
}

var operation = window.prompt("Would you like to add or subtract?");

var a = window.prompt("Enter the first number");
var b = window.prompt("Enter the second number");

switch (operation.toLowerCase()) {
    case "add":
        addNumbers(a, b);
        break;
    case "subtract":
        subtractNumbers(a, b);
        break;
    default:
        console.log("Please Choose a valid operation");
}
