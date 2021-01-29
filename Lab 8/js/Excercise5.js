var a = window.prompt("Input the first Integer");
var b = window.prompt("Input the second Integer");

if (a > b) {
    console.log("The larger of %s and %s is %s", a, b, a);
} else if (a < b) {
    console.log("The larger of %s and %s is %s", a, b, b);
} else {
    console.log("Both the inputs %s & %s are equal", a, b);
}
